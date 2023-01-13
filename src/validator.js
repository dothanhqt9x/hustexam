function Validator(options){

    function getParent(Element, selector){
        while(Element.parentElement){
            if (Element.parentElement.matches(selector)){
                return Element.parentElement;
            }
            Element = Element.parentElement;
        }
    }
    var selectorRules = {};
    //Hàm thực hiện validate
    function validate(inputElement, rule){
        var errorMessage;
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                //Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        
            //Lặp qua từng rule & kiểm tra
            //Nếu có lỗi thì dừng việc kiểm tra
        for (var i=0; i < rules.length; ++i){
            switch(inputElement.type){
                case 'checkbox':
                case 'radio':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );

                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;
        }
        if(errorMessage){
             errorElement.innerText = errorMessage;
             getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else{
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }
        return !errorMessage;
    }

    //Lấy element của form cần validate
    var formElement = document.querySelector(options.form)
    if(formElement){

        formElement.onSubmit = function(e){
            e.preventDefault();

            var isFormValid = true;
            //Lặp qua từng rules và validate
            options.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if(!isValid){
                    isFormValid = false;
                }
            });

            if (isFormValid){
                //Trường hợp submit với js
                if(typeof options.onSubmit === 'function'){
                        var enableInputs = formElement.querySelectorAll('[name]');
                        var formValues = Array.from(enableInputs).reduce(function(values, input){
                            switch(input.type){
                                case 'radio':
                                    values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                    break;
                                case 'checkbox':
                                    if(!input.matches(':checked')) return values;
                                    if(!Array.isArray(values[input.name])){
                                         values[input.name] = [];
                                    }
                                    values[input.name].push()
                                    break;
                                case 'file':
                                    values[input.name] = input.files;
                                    break;
                                default:
                                    values[input.name] = input.value;
                            }
                            return values;
                        }, {});
                        options.onSubmit(formValues);
                }
                else{
                    formElement.Submit();
                }
            }
        }
        //Lặp qua mỗi rule và xử lý (lắng nghe sự kiện, input, ...)
        options.rules.forEach(function(rule){

            //Lưu lại các rules cho mỗi input
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            } else{
                selectorRules[rule.selector] = [rule.test];
            }
            var inputElement = formElement.querySelectorAll(rule.selector);

            Array.from(inputElement).forEach(function(inputElement){
                if (inputElement){
                //Xử lý trường hợp blur khỏi input
                 inputElement.onblur = function(){
                    validate(inputElement, rule);
                 }

                 //Xử lý mỗi khi người dùng nhập vào input
                 inputElement.oninput = function(){
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                 }
            }
            })
        })
    }
}

//Định nghĩa rules
//Nguyên tắc của các rules
// 1. Khi có lỗi => Trả ra massage lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function(selector, message){
    return{
        selector: selector,
        test: function(value){
            return value ? undefined : message || 'Please enter this field'//trim: loại bỏ dấu cách
        }
    }
}


Validator.isEmail = function(selector){
    return{ 
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'This field must be a valid email address';
        } 
    }
}

Validator.minLength = function(selector, min){
    return{ 
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined : `Please enter an least ${min} characters`
        } 
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message){
    return{
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || 'Giá  trị nhập vào không chính xác';
        }
    }
}

export default Validator;
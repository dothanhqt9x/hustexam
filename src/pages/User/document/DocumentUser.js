import { useSelector } from "react-redux"
import { Fragment } from "react";

function DocumentUser(){
    const allDocuments = useSelector(state => state.document.documents.allDocuments);
    return(
        <div className="school">
            <h3>Tài liệu tham khảo</h3>
            {
                allDocuments ? (
                    <ul>
                        {
                        allDocuments.map((document, index) => {
                            return(
                                <div>
                                    <div style={{display: 'flex'}}>
                                    <li key={index}><a href={document.link}>{document.name}</a></li>
                                    </div>
                                </div>
                                
                            )
                        })
                        }
                    </ul>
                ) : (Fragment)
            }   
        </div>
    )
}

export default DocumentUser
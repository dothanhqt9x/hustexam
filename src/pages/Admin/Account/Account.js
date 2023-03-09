import { useDispatch, useSelector } from 'react-redux'
import {useState} from 'react'
import { useEffect } from 'react'
import {getAllAccounts, changeStatusAccount} from '../../../redux/apiRequest'
import { useNavigate } from 'react-router-dom';
import './Account.css'

function Account() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [componentState, setComponentState] = useState(0);
    // const [userId, setUserId] = useState(-1);
    // const [status, setStatus] = useState('');
    const allAccounts = useSelector(state => state.account.accounts.allAccounts);
    // const isFetching = useSelector(state => state.account.accounts.isFetching);

    console.log(allAccounts);

    useEffect(() => {
        getAllAccounts(dispatch, navigate);
    }, [dispatch, navigate, componentState])

    // if (isFetching) {
    //     return <div>Loading...</div>;
    // }

    const handleStatusChange = (userId, status) => {
        setComponentState(componentState + 1);
        const newAccountStatus = {
            "userId": userId,
            "status": status
        }
        changeStatusAccount(newAccountStatus, dispatch, navigate)
    }

    return (
        <div>
            <h1>Account List</h1>
            <table>
                <thead>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {allAccounts.map((account) => (
                        <tr key={account.userId}>
                            <td>{account.role}</td>
                            <td>{account.email}</td>
                            <td>{account.status === '1' ? 'Active' : 'Lock'}</td>
                            <td>
                                {account.status === '1' ? (
                                    <button onClick={() => handleStatusChange(account.userId, '0')}>
                                        Lock
                                    </button>
                                ) : (
                                    <button onClick={() => handleStatusChange(account.userId, '1')}>
                                        Active
                                    </button>
                                )}
                            </td>
                        </tr>   
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Account
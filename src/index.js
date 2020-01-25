import './index.css';
import numeral from 'numeral';
import {getUsers} from './api/userApi';

getUsers().then(result => {
    let userBody = "";

    result.forEach(user => {
        userBody+= `<tr>
        <td>---</td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`
    });

    global.document.getElementById('users').innerHTML = userBody;
});

const courseValue = numeral(1000).format('$0,0.00');
console.log(courseValue);


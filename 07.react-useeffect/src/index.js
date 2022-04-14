import './style.css';

import Members from './Members';

const excute = () => {
    document.querySelector('#remove-btn').addEventListener('click', () => {
        targetEl.removeChild(member);
    });

    const targetEl = document.getElementById('root');

    const member = new Members({ list: [] });
    targetEl.appendChild(member);
};

excute();
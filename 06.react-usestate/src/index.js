import "./style.css";

import Members from "./Members";

const excute = () => {
  const targetEl = document.getElementById('root');

  const member = Members({ list: [] });
  targetEl.appendChild(member);
};

excute();

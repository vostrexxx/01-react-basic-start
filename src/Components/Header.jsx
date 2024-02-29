import logo from "../../public/logo.jpg";
import { regions } from "../data";
import { supp } from "../data";

function OptionComponent(props) {
  return <option value={props.EngTitle}>{props.RuTitle}</option>;
}

function AllSups(props) {
  return (
    <li>
      <select style={selectStyle}>
        <OptionComponent EngTitle={supp[0].EngTitle} RuTitle={supp[0].RuTitle} />
        <OptionComponent EngTitle={supp[1].EngTitle} RuTitle={supp[1].RuTitle} />
        <OptionComponent EngTitle={supp[2].EngTitle} RuTitle={supp[2].RuTitle} />
        <OptionComponent EngTitle={supp[3].EngTitle} RuTitle={supp[3].RuTitle} />
      </select>
    </li>
  );
}

export default function Header() {
  return (
    <header style={headerStyle}>
      <ul style={menuStyle}>
        <li>
          <a href="#">
            <img src={logo} alt="Логотип" style={logoStyle} />
          </a>
        </li>
        <li>
          <select style={selectStyle}>
            <OptionComponent
              EngTitle={regions[0].EngTitle}
              RuTitle={regions[0].RuTitle}
            />
            <OptionComponent
              EngTitle={regions[1].EngTitle}
              RuTitle={regions[1].RuTitle}
            />
            <OptionComponent
              EngTitle={regions[2].EngTitle}
              RuTitle={regions[2].RuTitle}
            />
            <OptionComponent
              EngTitle={regions[3].EngTitle}
              RuTitle={regions[3].RuTitle}
            />
          </select>
        </li>
        <AllSups/>
        <li>
          <select style={selectStyle}>
            <option value="PA">ЛК</option>
            <option value="profile">Профиль</option>
            <option value="settings">Настройки</option>
            <option value="logout">Войти/Зарегистрироваться</option>
          </select>
        </li>
      </ul>
    </header>
  );
}

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 20px",
  backgroundColor: "#f0f0f0",
  borderBottom: "1px solid #ccc",
};

const menuStyle = {
  display: "flex",
  alignItems: "center",
  listStyleType: "none",
  margin: 0,
  padding: 0,
};

const logoStyle = {
  height: "40px",
  marginRight: "10px",
};

const selectStyle = {
  border: "none",
  backgroundColor: "transparent",
  fontSize: "inherit",
  color: "inherit",
  padding: "5px 10px",
  margin: "0 10px",
};

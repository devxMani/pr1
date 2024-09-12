export default function pr3() {
  const [isToggled, setisToggled] = useState(false);

  const handleToggle = () => {
    setisToggled(!isToggled);
  };
  return (
    <div>
      <ul>
        <li>
          <babel>
            <input type="checkbox" onChange={handleToggle} />
          </babel>
          <p>{isToggled ? "on" : "off"}</p>
        </li>
      </ul>
    </div>
  );
}

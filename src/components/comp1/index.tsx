import style from "./index.module.scss";
import { Button } from "antd";

function Comp1() {
  return (
    <div className={style.box}>
      <Button type="primary">anniu</Button>
      <div>
        <Button></Button>
      </div>
    </div>
  );
}

export default Comp1;

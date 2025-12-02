import HeadingText from "./HeadingText";
import AppName from "./AppName";
function MainContent() {
  return (
    <div className="p-5">
      <HeadingText text="WELCOME TO" size="3">
        <AppName />
      </HeadingText>
      <div className="row w-75 mx-auto">
        <div className="col">Column</div>
        <div className="col">Column</div>
        <div className="col">Column</div>
      </div>
    </div>
  );
}

export default MainContent;

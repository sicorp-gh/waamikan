import HeadingText from "./HeadingText";
import Paragraph from "./Paragraph";
import AppName from "./AppName";
import TextCard from "./TextCard";
import Sidebar from "./Sidebar";

function MainContent() {
  return (
    <div className="w-100 w-75 container p-md-5 p-3">
      <HeadingText text="WELCOME TO" color="danger" size="3">
        <AppName />
      </HeadingText>
      <div className="mx-auto">
        <Paragraph color="dark" align="center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          nihil aliquam unde itaque laboriosam, soluta animi velit ratione
          sapiente reiciendis quod. Earum, saepe neque natus architecto ex
          laudantium sequi nemo!
        </Paragraph>
      </div>

      <div className="row container-fluid border-danger p-0 w-100 mx-auto text-center my-5">
        <div className="col-md-4">
          <TextCard>
            <HeadingText text="SERVICES 1" color="white" size="6" />
            <Paragraph color="white" align="center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            </Paragraph>
          </TextCard>
        </div>
        <div className="col-md-4">
          <TextCard>
            <HeadingText text="SERVICES 2" color="white" size="6" />
            <Paragraph color="white" align="center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            </Paragraph>
          </TextCard>
        </div>
        <div className="col-md-4">
          <TextCard>
            <HeadingText text="SERVICES 3" color="white" size="6" />
            <Paragraph color="white" align="center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            </Paragraph>
          </TextCard>
        </div>
      </div>

      <div className="row w-100 mx-auto gap-5">
        <div className="col-md-4">
          <Sidebar />
        </div>
        <div className="col-md-8">
          <HeadingText text="SHOP PRODUCTS" color="dark" size="5"></HeadingText>
        </div>
      </div>
    </div>
  );
}

export default MainContent;

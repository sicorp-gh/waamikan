import HeadingText from "../components/HeadingText";
import AppName from "../components/AppName";
import Container from "./Container";
import TextCard from "../components/TextCard";
import GridRow from "./GridRow";
import GridCol from "./GridCol";
import Button from "../components/Button";
function MainContentLayout() {
  return (
    <div className="w-full">
      <Container>
        <HeadingText
          className="my-10"
          color="red-500"
          size="3xl"
          align="center"
        >
          <span> WELCOME TO </span>
          <AppName />
        </HeadingText>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          nihil aliquam unde itaque laboriosam, soluta animi velit ratione
          sapiente reiciendis quod. Earum, saepe neque natus architecto ex
          laudantium sequi nemo!
        </p>

        <GridRow cols={3} gap={5} className="my-5">
          <GridCol size={1} className="bg-gray-700">
            <TextCard className="text-center bg-transparent">
              <HeadingText color="white" size="lg" align="center">
                Service 1
              </HeadingText>
              <p className="text-white text-center my-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi nihil aliquam unde itaque laboriosam, soluta animi.
              </p>
              <Button>Learn More</Button>
            </TextCard>
          </GridCol>
          <GridCol size={1} className="bg-gray-700">
            <TextCard className="text-center bg-transparent">
              <HeadingText color="white" size="lg" align="center">
                Service 1
              </HeadingText>
              <p className="text-white text-center my-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi nihil aliquam unde itaque laboriosam, soluta animi.
              </p>
              <Button>Learn More</Button>
            </TextCard>
          </GridCol>

          <GridCol size={1} className="bg-gray-700">
            <TextCard className="text-center bg-transparent">
              <HeadingText color="white" size="lg" align="center">
                Service 1
              </HeadingText>
              <p className="text-white text-center my-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi nihil aliquam unde itaque laboriosam, soluta animi.
              </p>
              <Button>Learn More</Button>
            </TextCard>
          </GridCol>
        </GridRow>

        <div className="grid my-5 w-full sm:grid-cols-3 gap-2">
          <div className="col-span-1"></div>
        </div>
      </Container>
    </div>
  );
}

export default MainContentLayout;

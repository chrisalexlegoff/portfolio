import { Button, ShowLottie, DarkModeButton } from '../components';
import { author } from '../utils/portfolio';

const Maintenance = () => {
  const { email } = author;
  return (
    <>
      <div className="h-screen grid place-items-center">
        <div className="text-center w-full">
          <h1 className="font-signature text-accent  text-2xl sm:text-4xl relative group top-1 -mb-10">
            {author.name}
          </h1>
          <ShowLottie
            path={`https://assets5.lottiefiles.com/packages/lf20_gsyixzef.json`}
            className="mx-auto"
          />
          <p className="text-3xl md:text-4xl  text-dark-2 -mt-16">
            Mon portfolio se refait une beauté
          </p>

          <Button
            type="link"
            href={`mailto: ${email}`}
            size="lg"
            className="mt-10"
            sameTab
            center
          >
            Contactez-moi
          </Button>
        </div>
      </div>
      <DarkModeButton className="fixed top-5 right-5 sm:top-10 sm:right-10" />
    </>
  );
};

export default Maintenance;

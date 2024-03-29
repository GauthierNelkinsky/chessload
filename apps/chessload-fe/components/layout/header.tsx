import MobileNav from "../mobile-header";
import { Separator } from "../ui/separator";
import MainHeader from "../main-header";
interface IProps {

}

const Header = ({}:IProps) => {
  return (
    <section className="flex-col flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainHeader />
            <MobileNav />
        </div>
      </div>
    </section>  
  );
};

export default Header;

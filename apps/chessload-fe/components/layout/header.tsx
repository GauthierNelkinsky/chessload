import MobileNav from "../mobile-header";
import { Separator } from "../ui/separator";
import MainHeader from "../main-header";
interface IProps {

}

const Header = ({}:IProps) => {
  return (
    <header className="flex-col flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainHeader />
            <MobileNav />
        </div>
      </div>
    </header>  
  );
};

export default Header;

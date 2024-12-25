import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        <p>
          &copy; {currentYear} {APP_NAME}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Logo from "./Logo";
import AboutUs from "./AboutUs";
import UsefulLinks from "./UsefulLinks";
import FollowUs from "./FollowUs";
import Subscribe from "./Subscribe";

function Footer() {
  return (
    <div className="bg-orange-50 w-full flex justify-center mt-8 pt-[100px] pb-[70px]">
      <div class="grid grid-cols-1 gap-4 tablet:hidden">
        <Logo />
        <AboutUs />
        <UsefulLinks />
        <FollowUs />
        <Subscribe />
      </div>
      <div class="hidden laptop:hidden tablet:grid tablet:grid-cols-3 tablet:gap-4">
        <Logo />
        <AboutUs />
        <UsefulLinks />
        <FollowUs />
        <div className="flex justify-center col-span-2">
          <Subscribe />
        </div>
      </div>
      <div class="hidden laptop:grid laptop:grid-cols-5 laptop:gap-4">
        <Logo />
        <AboutUs />
        <UsefulLinks />
        <Subscribe />
        <FollowUs />
      </div>
    </div>
  );
}

export default Footer;

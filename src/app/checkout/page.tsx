import Container from "@/components/Container";
import DeliveryServices from "@/components/DeliveryServices";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dot } from "lucide-react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="full">
      <PageHero name="Checkout" />

      <Container className="px-4 my-10">
        <div className="w-full max-w-6xl mx-auto flex justify-between max-lg:flex-col max-lg:justify-center">
          <div className="w-full h-full text-black px-4 py-12 flex flex-col gap-9 max-lg:items-center">
            <h2 className="font-semibold text-4xl mb-3">Login</h2>
            <div className="flex flex-col gap-9">
              <div className="flex gap-4 justify-center items-center w-[24rem] ">
                <Input label="First Name" className="w-full mx-0 " />
                <Input label="Last Name" className="w-full mx-0 " />
              </div>
              <Input label="Company Name (Optional)" />
              <Input label="Country / Region" />
              <Input label="Street address" />
              <Input label="Town / City" />
              <Input label="Province" />
              <Input label="Zip Code" />
              <Input label="Phone" />
              <Input label="Email address" />
              <Input placeholder="Additional information" />
            </div>
          </div>
          <div className="w-full h-full text-black px-4 py-12 mt-10 flex flex-col gap-9 max-lg:items-center">
            <div className="w-full p-4 border-b space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="font-medium text-2xl">Product</h2>
                <h2 className="font-medium text-2xl">Subtotal</h2>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#9F9F9F]">Asgaard sofa <b className="text-black"> x 1</b> </span>
                <span className="font-light">Rs. 250,000.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className=" ">Subtotal</span>
                <span className="font-light">Rs. 250,000.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className=" ">Total</span>
                <span className="font-bold text-[#B88E2F]">Rs. 250,000.00</span>
              </div>
            </div>
            <div className="w-full p-6 flex-col gap-4  flex">
              <span className="flex items-center font-medium -ml-6"><Dot size={60}/> Direct Bank Transfer </span>
              <p className="font-light text-[#9F9F9F]">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
              <div className="flex flex-col gap-2">
              <label htmlFor="bank" className="font-medium text-[#9F9F9F]"><input id="bank" type="radio" /> Direct Bank Transfer</label>
              <label htmlFor="cash" className="font-medium text-[#9F9F9F]"><input type="radio" id="cash" /> Cash On Delivery</label>
              </div>
              <p className="font-extralight text-black/80">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold text-black'>privacy policy.</span></p>
              <Link href={'/'}><Button variant={'fBtn2'} size={'f2'} className='w-3/5 mx-auto mt-7'>Place Order</Button></Link>
            </div>
          </div>
        </div>
      </Container>

      <DeliveryServices />
    </div>
  );
}

export default page;

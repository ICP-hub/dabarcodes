import JoinSteps from "../../reusable_components/JoinSteps";
import Section from "../../reusable_components/Section";

function Customer() {
  const stepsData = {
    header: "How to join to DaBarcodes as a Customer",
    items: [
      {
        image: "/image/Group 4526 (2).png",
        alt: "Sign up",
        title: "Sign up to the DaBarcodes",
        description:
          "Add additional details such as your preferences and interests to receive personalized promotions.",
      },
      {
        image: "/image/Group 4526 (1).png",
        alt: "Browse Promotions",
        title: "Browse the Promotions",
        description:
          "Select the promotions that suit your needs and link them to your profile. Save the linked promotions to your account for easy access.",
      },
      {
        image: "/image/Group 4526.png",
        alt: "Redeem Promotion",
        title: "Redeem the Promotion",
        description:
          "Go to any participating retailer listed on the platform. Show the linked promotion details and redeem the offer.",
      },
    ],
    arrows: ["/image/Arc 2.png", "/image/Arc 1.png"],
  };

  const itemsData = [
    {
      image: "/promotions2.png",
      alt: "Customer Insights",
      title: "Personalized Promotions",
      description:
        "   Get promotions tailored to your shopping preferences. Enjoy savings on products you love the most.",
    },
    {
      image: "/promotions1.png",
      alt: "SKU Tracking",
      title: "SKU Promotion Approval",
      description:
        "Track your linked SKUs and stay updated on the best deals.Customize your preferences to get notifications about promotions on your favorite products..",
    },
  ];
  return (
    <main id="customer">
      <Section
        bgColor="bg-white"
        header="For Customers"
        items={itemsData}
        mainImage="/image/image 54.png"
        mainImagePosition="right" // Options: "right" or "left"
        mainImageWidth="lg:w-[468px] xl:w-[468px]" // Optional
        mainImageHeight="lg:h-[308px] xl:h-[308px]" // Optional
      />

      {/*  */}
      <JoinSteps bgColor="bg-white" steps={stepsData} />
    </main>
  );
}

export default Customer;

import JoinSteps from "../../reusable_components/JoinSteps";
import Section from "../../reusable_components/Section";

const Supplier = () => {
  const stepsData = {
    header: "How to join to DaBarcodes as a Supplier",
    items: [
      {
        image: "/Reatiler1.png",
        alt: "Sign up",
        title: "List Your Products",
        description:
          "List your products on the daBarcodes platform. Provide details such as product categories, SKUs, and any other relevant information.",
      },
      {
        image: "/supplier2.png",
        alt: "Create Promotions",
        title: " Create Promotions",
        description:
          "Develop and create promotions for your listed products. Decide on the type of promotions you want to offer and set the terms and condition.",
      },
      {
        image: "/supplier3.png",
        alt: "Monitor and Adjust",
        title: "Monitor and Adjust",
        description:
          "  Use the platform’s analytics to see how well your promotions are doing and make adjustments as needed to maximize their effectiveness.",
      },
    ],
    arrows: ["/image/Arc 2.png", "/image/Arc 1.png"],
  };
  const itemsData = [
    {
      image: "/Frame 342.png",
      alt: "Customer Insights",
      title: "Customer Insights",
      description:
        "Gain deep insights into customer preferences and shopping behavior. Use this data to tailor your offerings and enhance customer satisfaction.",
    },
    {
      image: "/Frame 343.png",
      alt: "SKU Promotion Approval",
      title: "SKU Promotion Approval",
      description:
        "Review and approve promotions created by suppliers. Ensure that the promotions align with your store's strategy and attract more customers.",
    },
  ];
  return (
    <main id="supplier" className="pb-40 ">
      <Section
        bgColor="bg-white"
        header="For Supplier"
        items={itemsData}
        mainImage="/image55.png"
        mainImagePosition="right" // Options: "right" or "left"
      />
      <JoinSteps bgColor="bg-white" steps={stepsData} />
    </main>
  );
};

export default Supplier;

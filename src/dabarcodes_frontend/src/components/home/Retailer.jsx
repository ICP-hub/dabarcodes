import JoinSteps from "../../reusable_components/JoinSteps";
import Section from "../../reusable_components/Section";

const Retailer = () => {
  const stepsData = {
    header: "How to join to DaBarcodes as a Retailer",
    items: [
      {
        image: "/Reatiler1.png",
        alt: "Sign up",
        title: "Integrate Your Products",
        description:
          "Utilize our user-friendly interface to upload and manage your SKU data, ensuring all products are correctly categorized and easily accessible.",
      },
      {
        image: "/Reatiler2.png",
        alt: "Browse Promotions",
        title: " Analyze Customer Insights",
        description:
          "Leverage powerful analytics tools to gain valuable insights into customer behavior and preferences.",
      },
      {
        image: "/Reatiler3.png",
        alt: "Redeem Promotion",
        title: "Approve and Launch Promotions",
        description:
          " Collaborate with suppliers to approve and launch tailored promotions that resonate with your customers.",
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
    <main id="retailer" className="bg-[#DBF4FD] mt-8 sm:mt-32 pb-40">
      <Section
        bgColor="bg-[#DBF4FD]"
        header="For Retailers"
        items={itemsData}
        mainImage="/image55.png"
        mainImagePosition="left" // Options: "right" or "left"
      />
      <JoinSteps bgColor="bg-[#DBF4FD]" steps={stepsData} />
    </main>
  );
};

export default Retailer;

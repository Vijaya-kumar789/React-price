import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Card from "./card";

function App() {
  let input = [
    {
      titleName: "Free",
      price: 0,
      content: [
        {
          name: "Single User",
          marked: true,
        },
        {
          name: "500GB Storage",
          marked: true,
        },
        {
          name: "Unlimited Public Projects",

          marked: true,
        },
        {
          name: "Community Access",
          marked: true,
        },
        {
          name: "Unlimited Private Projects",
          marked: false,
        },
        {
          name: "Dedicated Phone Support",

          marked: false,
        },
        {
          name: "Free Subdomain",

          marked: false,
        },
        {
          name: "Monthly Status Reports",
          marked: false,
        },
      ],
      buttonFocus : false
    },
    {
      titleName: "Plus",
      price: 9,
      content: [
        {
          name: "Single User",
          marked: true,
        },
        {
          name: "500GB Storage",
          marked: true,
        },
        {
          name: "Unlimited Public Projects",

          marked: true,
        },
        {
          name: "Community Access",
          marked: true,
        },
        {
          name: "Unlimited Private Projects",

          marked: true,
        },
        {
          name: "Dedicated Phone Support",

          marked: true,
        },
        {
          name: "Free Subdomain",
          marked: true,
        },
        {
          name: "Monthly Status Reports",

          marked: false,
        },
      ],
      buttonFocus : false
    },
    {
      titleName: "Pro",
      price: 49,
      content: [
        {
          name: "Single User",
          marked: true,
        },
        {
          name: "500GB Storage",
          marked: true,
        },
        {
          name: "Unlimited Public Projects",
          marked: true,
        },
        {
          name: "Community Access",
          marked: true,
        },
        {
          name: "Unlimited Private Projects",
          marked: true,
        },
        {
          name: "Dedicated Phone Support",
          marked: true,
        },
        {
          name: "Free Subdomain",
          marked: true,
        },
        {
          name: "Monthly Status Reports",

          marked: true,
        },
      ],
      buttonFocus : true
    },
  ];

  return (
   <dir className="body">
    <div className="container" >
      <div className="row">
        {input.map((data, index) => {
          return <Card data={data} key={index} />;
        })}
      </div>
    </div>
    </dir>
  );
}

export default App;

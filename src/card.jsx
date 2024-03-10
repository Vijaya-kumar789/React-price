import { TiTick, TiTimes } from "react-icons/ti";

function Card({ data }) {
  return (
    <div className="col">
      <div className="card mb-4 box-shadow">
        <div className="card-header text-center">
          <h5 className="my-0 font-weight-normal text-muted">{data.titleName}</h5>
          <h1 className="card-title pricing-card-title">
            ${data.price}
            <small>/month</small>
          </h1>
        </div>
        <div className="card-body">
          <ul className="list-unstyled mt-3 mb-4">
            {data.content.map((condata, index) => {
              return (
                <li key={index}>
                  {" "}
                  {condata.marked ? (
                    <span>
                      <TiTick /> {condata.name}
                    </span>
                  ) : (
                    <span className="text-muted">
                      <TiTimes /> {condata.name}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className={
                `w-100 btn btn-lg ${
                    data.buttonFocus ? "btn-primary" : "btn-outline-primary"
                  }`
            }
          >
            BUTTON
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

import dr from "../assets/images/dr.png";

const MiddleBox = () => {
  return (
    <div className="col text-center">
      <img
        src={dr}
        className="img-fluid rounded mx-auto d-block"
        alt="Contact"
      />
      <div className="mt-2">
        <p>
          <strong>Phone:</strong> +1234567890
        </p>
        <p>
          <strong>Email:</strong> info@example.com
        </p>
      </div>
    </div>
  );
};

export default MiddleBox;

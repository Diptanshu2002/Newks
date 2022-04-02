import React from "react";

export default function footer() {
  return (
    <div>
      <footer
        className="bg-dark text-center text-white"
        style={{ position: "fixed", width: "100%", bottom: "0px" }}
      >
        <div className="text-center p-3" style={{ backgroundColor: "#363333" }}>
          Made with{" "}
          <i
            class="fa fa-heart"
            style={{ color: "red" }}
            aria-hidden="true"
          ></i>{" "}
          by Team Money Minds!
        </div>
      </footer>
    </div>
  );
}

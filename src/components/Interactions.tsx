import React, { useState } from "react";
import sdk from "@crossmarkio/sdk";

const Interactions: React.FC = () => {
  const [signInResponse, setSignInResponse] = useState("");
  const [sessionUserResponse, setSessionUserResponse] = useState("");
  const [signTransactionTxblob, setSignTransactionTxblob] = useState("");
  const [submitTransactionResponse, setSubmitTransactionResponse] = useState("");

  const signIn = async () => {
    try {
      let address = (await sdk.async.signInAndWait()).response.data.address;
      setSignInResponse(address);
    } catch (error) {
      console.error("Error during sign in:", error);
      setSignInResponse("Error occurred during sign in");
    }
  };

  const getUserSession = async () => {
    let id = sdk.session.user?.id;
    if (id) setSessionUserResponse(id);
    else setSessionUserResponse("No active session");
  };

  const signTransaction = async () => {
    try {
      let resp = await sdk.async.signAndWait({
        TransactionType: "Payment",
        Account: signInResponse,
        Destination: "rK8jihXBZCFWZqX95SET3CCi1WdRgZQwex", // Add any destination address here
        Amount: "11000000", // XRP in drops
      });
      if (resp) setSignTransactionTxblob(resp.response.data.txBlob);
    } catch (error) {
      console.error("Error during transaction signing:", error);
      setSignTransactionTxblob("Error occurred during transaction signing");
    }
  };

  const submitTransaction = async () => {
    try {
      let resp = await sdk.async.submitAndWait(signInResponse, signTransactionTxblob);
      if (resp) setSubmitTransactionResponse(resp.response.data.resp.result.hash);
    } catch (error) {
      console.error("Error during transaction submission:", error);
      setSubmitTransactionResponse("Error occurred during transaction submission");
    }
  };

  return (
    <div className="interactions-container">
      <h2>Interactions</h2>
      
      <div className="interaction-section">
        <button onClick={getUserSession} className="interaction-button">Get Session</button>
        <textarea
          className="interaction-response"
          readOnly
          value={`Current User ID: ${sessionUserResponse}`}
        ></textarea>
      </div>
      <div className="interaction-section">
        <button onClick={signTransaction} className="interaction-button">Sign Transaction</button>
        <textarea
          className="interaction-response"
          readOnly
          value={`TxBlob: ${signTransactionTxblob}`}
        ></textarea>
      </div>
      <div className="interaction-section">
        <button onClick={submitTransaction} className="interaction-button">Submit Transaction</button>
        <textarea
          className="interaction-response"
          readOnly
          value={`Hash: ${submitTransactionResponse}`}
        ></textarea>
      </div>
    </div>
  );
};

export default Interactions;
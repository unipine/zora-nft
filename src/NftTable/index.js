import { useEffect, useState } from "react";
import { getHighestNfts } from "../zora";
import NftRow from "./nftRow";
import "./style.css";

function NftTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const promise = () =>
      new Promise(() => {
        setIsLoading(true);
        getNfts().then(() => {
          setIsLoading(false);
        });
      });

    return () => {
      promise();
    };
  }, []);

  const getNfts = async () => {
    const nfts = await getHighestNfts();
    setNfts(nfts);
  };

  console.log(nfts);

  return (
    <div className="nftTable">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {nfts &&
            nfts.map((nft) => (
              <NftRow
                key={`nft-row-${nft.sale.transactionInfo.transactionHash}`}
                nft={nft.sale}
              />
            ))}
        </>
      )}
    </div>
  );
}

export default NftTable;

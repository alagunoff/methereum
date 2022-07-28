import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Header, Footer } from "components";

import styles from "./Welcome.module.scss";

function Welcome() {
  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.introduction}>
          <Typography variant="h1" gutterBottom fontSize={27}>
            Metalamp NFT Project
          </Typography>
          <Typography variant="body1" marginBottom={2}>
            Connect your wallet, verify your balance, select the number of NFTs
            you would like to purchase, and click Mint. Questions? Issues? Get
            the Mint Guide.
          </Typography>
          <Button variant="contained">Connect my wallet</Button>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Welcome;

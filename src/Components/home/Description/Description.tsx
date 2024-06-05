import styles from "./Description.module.sass";
import Image from "next/image";

const PLACEHOLDER_IMAGE =
  "data:image/jpeg;base64,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";

export const Description = () => {
  return (
    <section className={styles.Description}>
      <div className={styles.Description__imageContainer}>
        <Image
          src="/images/description.jpeg"
          alt="products marketplace"
          fill
          placeholder="blur"
          blurDataURL={PLACEHOLDER_IMAGE}
        />
      </div>

      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>
          Future World: Your Gateway to Tomorrow's Tech! Dive into a world of
          cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};

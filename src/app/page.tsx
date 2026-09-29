import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Navigation */}
      <header className={styles.header}>
        <div className={styles.navContainer}>
          <div className={styles.brand}>
            <span className={styles.brandName}>FIZZ &amp; FORAGE</span>
            <span className={styles.brandTag}>Craft Botanical Soda</span>
          </div>
          <nav className={styles.navLinks}>
            <a href="#flavors" className={styles.navLink}>
              Botanicals
            </a>
            <a href="#process" className={styles.navLink}>
              Our Process
            </a>
            <a href="#order" className={styles.navCta}>
              Order 12-Pack
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.pulseDot}></span>
            <span>Batch 04 Now Bottled</span>
          </div>

          <h1 className={styles.headline}>
            Soda reimagined from <em>wild roots</em> &amp; real citrus.
          </h1>

          <p className={styles.subhead}>
            Cold-infused Mediterranean blood oranges, wild foraged rosemary, and natural mountain spring water. No corn syrups, artificial essences, or hollow sweeteners.
          </p>

          <div className={styles.ctaGroup}>
            <a href="#order" className={styles.primaryCta}>
              Get the Tasting Box
            </a>
            <a href="#flavors" className={styles.secondaryCta}>
              Explore the Harvest
            </a>
          </div>

          <div className={styles.metaRow}>
            <div className={styles.metaItem}>
              <span className={styles.metaValue}>35</span>
              <span className={styles.metaLabel}>Calories per can</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaValue}>4g</span>
              <span className={styles.metaLabel}>Natural fruit sugars</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaValue}>100%</span>
              <span className={styles.metaLabel}>Whole botanical steeped</span>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.imageFrame}>
            <Image
              src="/botanical-soda.jpg"
              alt="Fizz & Forage Wild Botanical & Blood Orange Soda"
              width={600}
              height={800}
              priority
              className={styles.productImg}
            />
          </div>
        </div>
      </section>

      {/* Botanical Ingredients */}
      <section id="flavors" className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionKicker}>Purity of Flavor</div>
          <h2 className={styles.sectionTitle}>
            Three core elements. Nothing artificial.
          </h2>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <span className={styles.cardIndex}>01 / CITRUS</span>
            <h3 className={styles.cardTitle}>Tarocco Blood Oranges</h3>
            <p className={styles.cardDesc}>
              Cold-pressed within 48 hours of harvest for vibrant tartness and deep ruby color without synthetic dyes.
            </p>
          </article>

          <article className={styles.card}>
            <span className={styles.cardIndex}>02 / BOTANICALS</span>
            <h3 className={styles.cardTitle}>Foraged Wild Herbs</h3>
            <p className={styles.cardDesc}>
              Mountain rosemary, sweet woodruff, and gentian root gentle slow-steeped to deliver complex, aromatic finish.
            </p>
          </article>

          <article className={styles.card}>
            <span className={styles.cardIndex}>03 / EFFEFFERVESCENCE</span>
            <h3 className={styles.cardTitle}>Fine Champagne Bubbles</h3>
            <p className={styles.cardDesc}>
              Micro-carbonated spring water creates a soft, sparkling texture that opens the palate rather than overwhelming it.
            </p>
          </article>
        </div>
      </section>

      {/* Comparison Clean Strip */}
      <section id="process" className={styles.cleanStrip}>
        <div className={styles.cleanContainer}>
          <div className={styles.cleanContent}>
            <h3>A clean break from industrial sodas</h3>
            <p>
              Most mass-market soft drinks are chemically synthesized concentrates diluted with tap water and high-fructose corn syrup. We brew each batch using genuine botanical extractions.
            </p>
          </div>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <span className={styles.featureIcon}>✓</span>
              <span>Directly sourced ingredients with zero artificial flavorings</span>
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureIcon}>✓</span>
              <span>Naturally low glycemic index (no energy crashes)</span>
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureIcon}>✓</span>
              <span>Infinitely recyclable BPA-free slimline cans</span>
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureIcon}>✓</span>
              <span>Crafted in small, numbered seasonal batches</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Order Section */}
      <section id="order" className={styles.section}>
        <div className={styles.orderBanner}>
          <h2 className={styles.bannerHeadline}>
            Experience real sparkling craft soda at your table.
          </h2>
          <p className={styles.bannerSubhead}>
            Delivered in insulated 12-can packs directly from our craft facility. Complimentary shipping on your initial order.
          </p>
          <a href="#order" className={styles.primaryCta}>
            Claim Your 12-Pack
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <span className={styles.copyright}>
            &copy; {new Date().getFullYear()} Fizz &amp; Forage Co. All rights reserved.
          </span>
          <div className={styles.footerLinks}>
            <a href="#flavors">Ingredients</a>
            <a href="#process">Philosophy</a>
            <a href="#order">Shop</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

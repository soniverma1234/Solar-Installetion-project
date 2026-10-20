import React from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";

export function HeroParallax({ products }) {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );

  return (
    <section
      ref={ref}
      className="relative flex h-[300vh] flex-col self-auto overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]"
      aria-label="Sunora renewable energy projects"
    >
      <Header />
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
        <motion.div className="mb-20 flex flex-row-reverse gap-5 md:gap-20">
          {firstRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div>
        <motion.div className="mb-20 flex flex-row gap-5 md:gap-20">
          {secondRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateXReverse}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse gap-5 md:gap-20">
          {thirdRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export function Header() {
  return (
    <div className="relative left-0 top-0 mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-40">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#5E7848]">
        Sunora Clean Energy
      </p>
      <h1 className="text-4xl font-bold text-[#173B35] md:text-7xl">
        Powering a brighter <br className="hidden md:block" /> tomorrow
      </h1>
      <p className="mt-8 max-w-2xl text-base text-slate-600 md:text-xl">
        Discover the solar and renewable energy projects helping homes and
        businesses move toward a cleaner, more resilient future.
      </p>
    </div>
  );
}

export function ProductCard({ product, translate }) {
  return (
    <motion.article
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/product relative h-72 w-[min(30rem,82vw)] shrink-0 md:h-96"
    >
      <Link
        to={product.link}
        aria-label={`View ${product.title} projects`}
        className="block h-full w-full overflow-hidden rounded-xl shadow-lg transition-shadow group-hover/product:shadow-2xl"
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover/product:scale-105"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
        <span className="absolute bottom-5 left-5 text-lg font-semibold text-white md:text-xl">
          {product.title}
        </span>
      </Link>
    </motion.article>
  );
}

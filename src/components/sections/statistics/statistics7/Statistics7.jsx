import React from "react";
import styles from "../../heros/hero7/styles7/style";

const Stats7 = ({ template }) => {
  const statistics = template.statistics;
  console.log(statistics);

  return (
    <div id={statistics.sectionId} className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
          {statistics.statistics.map((stat, index) => (
            <div key={index} className={`flex-1 flex justify-start items-center flex-row m-3`}>
              <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">{stat.value}</h4>
              <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient7 uppercase ml-3">
                {stat.title}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Stats7;

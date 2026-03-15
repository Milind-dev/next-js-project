// import "../../components/ui/AnimatedButton.module.css";
import styles from "../../components/ui/AnimatedButton.module.css";
import useInView from "../../../app/hooks/useInview";

type AttackItems = {
  title: string;
  description?: string;
};

export default function Tradedashdescrip({ title, description }: AttackItems) {
  const { ref, isVisible } = useInView();
  return (
    <div ref={ref}>
      <div className="space-y-2">
        <h4 className="text-white font-semibold">
          {title.split("").map((char, index) => (
            <span
              key={index}
              className={isVisible ? styles.blurchar : ""}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h4>

        {description && (
          <p className="text-gray-300 text-sm">
            {description.split("").map((char, index) => (
              <span
                key={index}
                className={isVisible ? styles.blurchar : ""}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}

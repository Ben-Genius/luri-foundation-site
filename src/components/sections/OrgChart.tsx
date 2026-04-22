"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Tree = dynamic(() => import("react-organizational-chart").then((mod) => mod.Tree), {
  ssr: false,
});
const TreeNode = dynamic(() => import("react-organizational-chart").then((mod) => mod.TreeNode), {
  ssr: false,
});

function Node({
  label,
  sub,
  variant = "default",
}: {
  label: string;
  sub: string;
  variant?: "default" | "accent" | "unit";
}) {
  const styles: Record<string, React.CSSProperties> = {
    default: {
      background: "rgba(255,255,255,0.07)",
      border: "1px solid rgba(255,255,255,0.15)",
      color: "#ffffff",
    },
    accent: {
      background: "rgba(182,144,0,0.15)",
      border: "1px solid rgba(182,144,0,0.35)",
      color: "#ffffff",
    },
    unit: {
      background: "rgba(0,80,53,0.35)",
      border: "1px solid rgba(0,80,53,0.5)",
      color: "#ffffff",
    },
  };

  return (
    <div
      className="inline-flex flex-col items-center text-center rounded-xl px-5 py-3.5 min-w-[150px] sm:min-w-[180px]"
      style={styles[variant]}
    >
      <p className="font-bold text-sm leading-snug">{label}</p>
      <p className="text-[0.62rem] mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>
        {sub}
      </p>
    </div>
  );
}

export function OrgChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-40 flex items-center justify-center text-white/20 text-xs uppercase tracking-widest">
        Loading structure...
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto pb-2 mb-14">
      <Tree
        lineWidth="1px"
        lineColor="rgba(255,255,255,0.15)"
        lineBorderRadius="6px"
        lineHeight="28px"
        label={<Node label="Board of Trustees" sub="Governance & Oversight" variant="accent" />}
      >
        <TreeNode
          label={<Node label="Executive Director" sub="Leadership & Strategy" />}
        >
          <TreeNode
            label={<Node label="Programme Manager" sub="Operations & M&E" />}
          >
            <TreeNode label={<Node label="Health Unit" sub="Healthcare & Sanitation" variant="unit" />} />
            <TreeNode label={<Node label="Agri Unit" sub="Agribusiness & Farming" variant="unit" />} />
            <TreeNode label={<Node label="Education Unit" sub="STEM Scholarships" variant="unit" />} />
          </TreeNode>
        </TreeNode>
      </Tree>
    </div>
  );
}

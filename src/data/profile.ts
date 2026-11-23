export const SELF_NAME = "Zequn Xie";

export const profile = {
  name: "Zequn Xie",
  nativeName: "谢泽群",
  bio: "Master's student at Zhejiang University, working on agentic reinforcement learning.",
  affiliation: "Zhejiang University",
  location: "Hangzhou, China",
  email: "zqxie@zju.edu.cn",
  avatar: "/avatar.jpg",
  siteUrl: "https://zqxie77.github.io",
  github: "https://github.com/zqxie77",
  scholar: "https://scholar.google.com/citations?user=Oa1MpPkAAAAJ&hl=en",
  xiaohongshu:
    "https://www.xiaohongshu.com/user/profile/66f2520d000000001d033b78?xsec_token=ABK0-Y5MNUXVa2_3WoFqRZWAz7nlSicJz8N5bW4VD-MRw=&xsec_source=pc_followed",
  researchSummary:
    "Agentic Reinforcement Learning in complex interactive environments, with applications in tool-use, deep research, and code agents.",
  /** Venues named in the About Me paragraph. */
  highlightVenues: ["ACL", "EMNLP", "AAAI", "ICASSP", "ICME", "TOIS"],
  lastUpdated: "2026-11-23",
  visitorCounter: {
    href: "https://www.easycounter.com/",
    src: "https://www.easycounter.com/counter.php?zexie",
  },
};

export const advisors = [
  { title: "Dr.", name: "Tao Jin", href: "https://hugddygff.github.io/" },
  {
    title: "Prof.",
    name: "Zhou Zhao",
    href: "https://mypage.zju.edu.cn/zhaozhou",
  },
];

export type NewsItem = { date: string; text: string };

/** Newest first. `text` supports **bold** markers. */
export const news: NewsItem[] = [
  {
    date: "2026.10",
    text: "Serving as an **Area Chair** for ACL Rolling Review (ARR), October 2026.",
  },
  {
    date: "2026.06",
    text: "🎉 One paper is accepted by **ACM Transactions on Information Systems (TOIS)**.",
  },
  { date: "2026.04", text: "🎉🎉 Five papers are accepted by **ACL 2026**!" },
  {
    date: "2026.03",
    text: "🎉 One paper is accepted by **ICME 2026** as a **Spotlight**.",
  },
  { date: "2026.01", text: "🎉 Three papers are accepted by **ICASSP 2026**." },
  { date: "2025.11", text: "🎉 One paper is accepted by **AAAI 2026**." },
  { date: "2025.08", text: "🎉 One paper is accepted by **EMNLP 2025** (Main)." },
];

export type EducationItem = {
  start: string;
  end: string;
  degree: string;
  department: string;
  school: string;
  schoolUrl: string;
};

export const education: EducationItem[] = [
  {
    start: "2024.09",
    end: "2027.07",
    degree: "Master's student",
    department: "College of Computer Science",
    school: "Zhejiang University",
    schoolUrl: "https://www.zju.edu.cn/",
  },
];

export type LinkKind = "paper" | "code" | "website" | "productHunt";

export type Publication = {
  title: string;
  /** Append "†" to a name to mark co-first authorship. */
  authors: string[];
  venue: string;
  year: number;
  /** Shown inside the venue badge, e.g. "Main". */
  track?: string;
  /** Shown in red after the badge, e.g. "Spotlight". */
  highlight?: string;
  type: "conference" | "journal" | "preprint" | "release";
  /** Where the title links to; defaults to `links.paper`. */
  url?: string;
  links: Partial<Record<LinkKind, string>>;
  /** Adds an expandable "BibTeX" entry with a copy button. */
  bibtex?: string;
};

export const publications: Publication[] = [
  {
    title: "Hy4 flash",
    authors: ["Tencent Hy Team"],
    venue: "Model Release",
    year: 2026,
    type: "release",
    url: "https://huggingface.co/tencent/Hy4-flash",
    links: {
      code: "https://github.com/Tencent-Hunyuan/Hy4-flash",
      website: "https://huggingface.co/tencent/Hy4-flash",
    },
    bibtex: `@misc{tencent2026hy4flash,
  title        = {Hy4 flash},
  author       = {{Tencent Hy Team}},
  year         = {2026},
  howpublished = {\\url{https://huggingface.co/tencent/Hy4-flash}},
  note         = {Model release}
}`,
  },
  {
    title: "Hy4",
    authors: ["Tencent Hy Team"],
    venue: "Model Release",
    year: 2026,
    type: "release",
    url: "https://huggingface.co/tencent/Hy4",
    links: {
      code: "https://github.com/Tencent-Hunyuan/Hy4",
      website: "https://huggingface.co/tencent/Hy4",
    },
    bibtex: `@misc{tencent2026hy4,
  title        = {Hy4},
  author       = {{Tencent Hy Team}},
  year         = {2026},
  howpublished = {\\url{https://huggingface.co/tencent/Hy4}},
  note         = {Model release}
}`,
  },
  {
    title: "Hy4 preview",
    authors: ["Tencent Hy Team"],
    venue: "Model Release",
    year: 2026,
    type: "release",
    url: "https://huggingface.co/tencent/Hy4-preview",
    links: {
      code: "https://github.com/Tencent-Hunyuan/Hy4-preview",
      website: "https://huggingface.co/tencent/Hy4-preview",
    },
    bibtex: `@misc{tencent2026hy4preview,
  title        = {Hy4 preview},
  author       = {{Tencent Hy Team}},
  year         = {2026},
  howpublished = {\\url{https://huggingface.co/tencent/Hy4-preview}},
  note         = {Model release}
}`,
  },
  {
    title:
      "DPDV: Dual-Pathway and Dual-View Representation Learning for Bridging Information Asymmetry",
    authors: ["Zequn Xie", "Xin Liu", "Fangming Feng", "Boyun Zhang", "Tao Jin"],
    venue: "ACL",
    year: 2026,
    track: "Main",
    type: "conference",
    links: {},
  },
  {
    title:
      "Bridging the Pose-Semantic Gap: A Cascade Framework for Text-Based Person Anomaly Search",
    authors: [
      "Zequn Xie",
      "Guijin Luo",
      "Chuxin Wang",
      "Sihang Cai",
      "Tao Jin",
      "Zhou Zhao",
    ],
    venue: "ACL",
    year: 2026,
    type: "conference",
    links: {
      code: "https://github.com/GridNexus/SSDC",
      productHunt: "https://github.com/GridNexus",
    },
  },
  {
    title:
      "Iterative Self-Correction for Text-Driven Person Re-Identification with Large Vision-Language Models",
    authors: [
      "Guijin Luo†",
      "Zequn Xie†",
      "Sihang Cai",
      "Chuxin Wang",
      "Zhou Zhao",
    ],
    venue: "ACL",
    year: 2026,
    type: "conference",
    links: {
      code: "https://github.com/GridNexus/Auto-ReID",
      productHunt: "https://github.com/GridNexus",
    },
  },
  {
    title:
      "Generative-to-Discriminative Test-Time Adaptation via Manifold-Aware Diffusion and Bayesian Distillation",
    authors: [
      "Boyun Zhang†",
      "Zequn Xie†",
      "Fangming Feng",
      "Zihan Zhang",
      "Yongbo He",
      "Chuxin Wang",
      "Sihang Cai",
      "Tao Jin",
    ],
    venue: "ACL",
    year: 2026,
    type: "conference",
    links: {},
  },
  {
    title:
      "Rectifying the Emotional Flow: Aligning Priors and Dynamic Guidance for High-Arousal Text-to-Speech",
    authors: [
      "Fangming Feng",
      "Dongjie Fu",
      "Zequn Xie",
      "Yu Zhang",
      "Yangyang Wu",
      "Zhou Zhao",
      "Tao Jin",
    ],
    venue: "ACL",
    year: 2026,
    track: "Main",
    type: "conference",
    links: {},
  },
  {
    title:
      "PeopleSearchBench: Evaluating AI-Powered People Search Platforms with Criteria-Grounded Verification",
    authors: [
      "Tianyu Shi",
      "Wei Wang",
      "Zequn Xie",
      "Shuai Zhang",
      "Boyang Xia",
      "Chenyu Zeng",
      "Qi Zhang",
      "Lynn Ai",
      "Yaqi Yu",
      "Kaiming Zhang",
      "Feiyue Tang",
      "Zhenyu Yu",
      "Lei Ding",
    ],
    venue: "Tech Report",
    year: 2026,
    type: "preprint",
    links: {
      paper: "https://arxiv.org/pdf/2603.27476v3",
      code: "https://github.com/LessieAI/people-search-bench",
      website: "https://lessie.ai/",
      productHunt: "https://www.producthunt.com/products/lessie-ai-2",
    },
  },
  {
    title:
      "Text-Guided Optimal Transport for Aerial-Ground Person Re-Identification",
    authors: ["Guijin Luo", "Zequn Xie", "Sihang Cai", "Ke Lei"],
    venue: "ICME",
    year: 2026,
    highlight: "Spotlight",
    type: "conference",
    links: {},
  },
  {
    title:
      "CONQUER: Context-Aware Representation with Query Enhancement for Text-Based Person Search",
    authors: ["Zequn Xie"],
    venue: "ICASSP",
    year: 2026,
    type: "conference",
    links: {
      paper: "https://arxiv.org/abs/2601.18625",
      code: "https://github.com/zqxie77/CONQUER",
    },
  },
  {
    title:
      "HVD: Human Vision-Driven Video Representation Learning for Text-Video Retrieval",
    authors: [
      "Zequn Xie",
      "Xin Liu",
      "Boyun Zhang",
      "Yuxiao Lin",
      "Sihang Cai",
      "Tao Jin",
    ],
    venue: "ICASSP",
    year: 2026,
    type: "conference",
    links: {
      paper: "https://arxiv.org/abs/2601.16155",
      code: "https://github.com/OPA067/HVD",
    },
  },
  {
    title:
      "Delving Deeper: Hierarchical Visual Perception for Robust Video-Text Retrieval",
    authors: ["Zequn Xie", "Boyun Zhang", "Yuxin Lin", "Tao Jin"],
    venue: "ICASSP",
    year: 2026,
    type: "conference",
    links: {
      paper: "https://arxiv.org/abs/2601.12768",
    },
  },
  {
    title:
      "Scene-Aware Spatiotemporal Generalization: Towards Robust Temporal Action Detection Across Domains",
    authors: ["Fangming Feng", "Zequn Xie", "Yangyang Wu", "Tao Jin"],
    venue: "AAAI",
    year: 2026,
    type: "conference",
    links: {},
  },
  {
    title:
      "Dynamic Uncertainty Learning with Noisy Correspondence for Text-based Person Retrieval",
    authors: [
      "Zequn Xie",
      "Chuxin Wang",
      "Sihang Cai",
      "Fangming Feng",
      "Guijin Luo",
      "Qifei Zhang",
      "Jingyuan Chen",
      "Tao Jin",
    ],
    venue: "TOIS",
    year: 2026,
    type: "journal",
    links: {
      paper: "https://dl.acm.org/doi/10.1145/3831683",
      code: "https://github.com/zqxie77/DUNC",
    },
  },
  {
    title: "Chat-Driven Text Generation and Interaction for Person Retrieval",
    authors: [
      "Zequn Xie",
      "Chuxin Wang",
      "Sihang Cai",
      "Shulei Wang",
      "Tao Jin",
    ],
    venue: "EMNLP",
    year: 2025,
    track: "Main",
    type: "conference",
    links: {
      paper: "https://aclanthology.org/2025.emnlp-main.266/",
    },
  },
];

export type ServiceItem = { role: string; venues: string[] };

export const service: ServiceItem[] = [
  { role: "Area Chair", venues: ["ACL Rolling Review (ARR), October 2026"] },
  { role: "Program Committee Member", venues: ["AAAI 2026", "AAAI 2027"] },
  {
    role: "Journal Reviewer",
    venues: [
      "ACM Computing Surveys (CSUR)",
      "IEEE Transactions on Image Processing (TIP)",
    ],
  },
  {
    role: "Conference Reviewer",
    venues: [
      "ICLR 2027",
      "The ACM Web Conference 2027 (Long Papers)",
      "ICASSP 2026",
      "ACM MM 2026",
      "ACL Rolling Review (ARR), August 2026",
    ],
  },
];

export function authorName(author: string) {
  return author.replace(/†$/, "");
}

export function isCoFirst(author: string) {
  return author.endsWith("†");
}

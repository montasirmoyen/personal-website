export type TechStackEntry = { src: string; doc?: string };

export const techStack: Record<string, TechStackEntry> = {
  ["c++"]: { src: "/cpp.png", doc: "https://en.cppreference.com/w/" },
  ["c"]: { src: "/c.png", doc: "https://en.cppreference.com/w/c" },
  bash: { src: "/bash.png", doc: "https://www.gnu.org/software/bash/manual/bash.html" },
  cmake: { src: "/cmake.png", doc: "https://cmake.org/documentation/" },
  ffmpeg: { src: "/ffmpeg.png", doc: "https://ffmpeg.org/documentation.html" },
  sdl2: { src: "/sdl2.png", doc: "https://wiki.libsdl.org/FrontPage" },
  python: { src: "/python.png", doc: "https://docs.python.org/3/" },
  java: { src: "/java.webp", doc: "https://docs.oracle.com/en/java/" },
  javascript: { src: "/javascript.png", doc: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  typescript: { src: "/typescript.png", doc: "https://www.typescriptlang.org/docs/" },
  lua: { src: "/lua.png", doc: "https://www.lua.org/docs.html" },
  json: { src: "/json.png", doc: "https://www.json.org/json-en.html" },
  postgresql: { src: "/postgresql.svg", doc: "https://www.postgresql.org/docs/" },
  rust: { src: "/rust.png", doc: "https://doc.rust-lang.org/book/" },
  opencv: { src: "/opencv.webp", doc: "https://docs.opencv.org/4.x/" },
  mediapipe: { src: "/mediapipe.png", doc: "https://github.com/google-ai-edge/mediapipe" },
  aws: { src: "/aws.png", doc: "https://aws.amazon.com/documentation/" },
  amplify: { src: "/amplify.png", doc: "https://docs.amplify.aws/" },
  lambda: { src: "/lambda.png", doc: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html" },
  s3: { src: "/s3.png", doc: "https://docs.aws.amazon.com/s3/index.html" },
  angular: { src: "/angular.png", doc: "https://angular.io/docs" },
  dynamodb: { src: "/dynamodb.png", doc: "https://docs.aws.amazon.com/dynamodb/index.html" },
  maven: { src: "/maven.png", doc: "https://maven.apache.org/index.html" },
  docker: { src: "/docker.png", doc: "https://docs.docker.com/" },
  ["spring boot"]: { src: "/spring-boot.webp", doc: "https://spring.io/projects/spring-boot" },
  react: { src: "/react.png", doc: "https://react.dev/learn" },
  firebase: { src: "/firebase.png", doc: "https://firebase.google.com/docs" },
  ["rblx studio"]: { src: "/rblxstudio.png", doc: "https://create.roblox.com/docs/creation" },
  ["node.js"]: { src: "/nodejs.png", doc: "https://nodejs.org/en/docs/" },
  mongodb: { src: "/mongodb.png", doc: "https://www.mongodb.com/docs/" },
  next: { src: "/next.webp", doc: "https://nextjs.org/docs" },
  supabase: { src: "/supabase.png", doc: "https://supabase.com/docs" },
  ["ai integration"]: { src: "/ai.png" },
  auditing: { src: "/audit.png" },
  entrepreneurship: { src: "/entrepreneurship.png" },
  parsing: { src: "/xlsx.png" },
  ["data engineering"]: { src: "/data.png" },
};

function normalizeTechName(tech: string): string {
  return tech.toLowerCase().trim();
}

export function getTechIcon(tech: string): string | null {
  return techStack[normalizeTechName(tech)]?.src ?? null;
}

export function getTechDoc(tech: string): string | null {
  return techStack[normalizeTechName(tech)]?.doc ?? null;
}

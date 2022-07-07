import { useTheme } from 'next-themes'
export default function Shimmer(w, h) {
const { theme } = useTheme()
const placehoder__bg = theme === 'dark' ? '#333' : '#efefef';
const placehoder__shim = theme === 'dark' ? '#222' : '#ccc';
return (`
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="${placehoder__bg}" offset="20%" />
      <stop stop-color="${placehoder__shim}" offset="50%" />
      <stop stop-color="${placehoder__bg}" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="${placehoder__bg}" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`)
}
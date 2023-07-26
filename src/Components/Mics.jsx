import React from "react";
import mics from "../assets/mics.svg";

const Mics = () => {
  return (
    <section className="py-20 w-full">
      <div className="container flex gap-10 justify-center items-center flex-col">
        <h1 className="text-white text-4xl md:text-6xl font-normal leading-[89.60px] tracking-wider">
          TOKENOMICS
        </h1>
        <img src={mics} alt="" />

        <div className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
          <svg
            width="auto"
            height="110"
            viewBox="0 0 254 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.936 29.28C34.408 29.216 33.48 29.128 32.152 29.016C31.416 28.984 30.824 28.968 30.376 28.968C29.8 28.968 29.256 28.984 28.744 29.016V25.296H29.344C30.656 25.296 32.016 25.384 33.424 25.56C33.872 25.624 34.376 25.712 34.936 25.824V29.28ZM30.976 37.128C30.976 36.792 30.952 36.552 30.904 36.408C30.856 36.248 30.776 36.144 30.664 36.096C30.552 36.032 30.36 35.984 30.088 35.952L27.136 35.592C25.392 35.4 24.216 34.832 23.608 33.888C23.336 33.488 23.152 33 23.056 32.424C22.96 31.848 22.912 31.144 22.912 30.312C22.912 28.536 23.368 27.256 24.28 26.472C25.016 25.832 26.168 25.456 27.736 25.344V30.168C27.736 30.376 27.744 30.552 27.76 30.696C27.776 30.84 27.808 30.952 27.856 31.032C27.904 31.128 27.984 31.2 28.096 31.248C28.208 31.28 28.376 31.304 28.6 31.32L31.912 31.728C32.6 31.824 33.16 31.944 33.592 32.088C34.024 32.232 34.392 32.456 34.696 32.76C35.416 33.512 35.776 34.848 35.776 36.768C35.776 38.8 35.328 40.224 34.432 41.04C34.032 41.408 33.544 41.68 32.968 41.856C32.408 42.016 31.744 42.12 30.976 42.168V37.128ZM29.704 42.192C28.104 42.192 26.616 42.12 25.24 41.976C24.424 41.896 23.808 41.816 23.392 41.736V38.232C24.336 38.312 25.416 38.392 26.632 38.472C27.4 38.504 27.944 38.52 28.264 38.52C29.128 38.52 29.696 38.496 29.968 38.448V42.192H29.704ZM41.4953 42.168C40.0553 42.168 39.0873 41.728 38.5913 40.848C38.3673 40.464 38.2153 40 38.1353 39.456C38.0553 38.896 38.0153 38.216 38.0153 37.416V29.76H42.4553V35.544C42.4553 36.392 42.4633 36.952 42.4793 37.224C42.5113 37.624 42.5593 37.912 42.6233 38.088C42.6873 38.264 42.7913 38.376 42.9353 38.424C43.0793 38.456 43.3353 38.472 43.7033 38.472H43.9433V41.472C43.3193 41.936 42.5033 42.168 41.4953 42.168ZM44.9513 29.76H49.3913V42H44.9513V29.76ZM60.0218 42.168C59.4458 42.168 58.9738 42.12 58.6058 42.024C58.2378 41.944 57.8938 41.776 57.5738 41.52V38.472H57.8378C58.1898 38.472 58.4378 38.456 58.5818 38.424C58.7418 38.376 58.8618 38.28 58.9418 38.136C59.0218 37.96 59.0698 37.704 59.0858 37.368C59.1018 37.128 59.1098 36.632 59.1098 35.88C59.1098 35.128 59.1018 34.632 59.0858 34.392C59.0698 34.04 59.0218 33.784 58.9418 33.624C58.8778 33.464 58.7578 33.368 58.5818 33.336C58.3578 33.304 58.1098 33.288 57.8378 33.288H57.5738V30.24C57.8938 30 58.2458 29.832 58.6298 29.736C59.0298 29.64 59.4938 29.592 60.0218 29.592C60.6618 29.592 61.2058 29.696 61.6538 29.904C62.1178 30.112 62.4938 30.448 62.7818 30.912C63.3418 31.84 63.6218 33.48 63.6218 35.832C63.6218 38.168 63.3418 39.816 62.7818 40.776C62.2218 41.704 61.3018 42.168 60.0218 42.168ZM52.1258 29.76H56.5658V46.776H52.1258V29.76ZM73.8968 42.168C73.3208 42.168 72.8488 42.12 72.4808 42.024C72.1128 41.944 71.7688 41.776 71.4488 41.52V38.472H71.7128C72.0648 38.472 72.3128 38.456 72.4568 38.424C72.6168 38.376 72.7368 38.28 72.8168 38.136C72.8968 37.96 72.9448 37.704 72.9608 37.368C72.9768 37.128 72.9848 36.632 72.9848 35.88C72.9848 35.128 72.9768 34.632 72.9608 34.392C72.9448 34.04 72.8968 33.784 72.8168 33.624C72.7528 33.464 72.6328 33.368 72.4568 33.336C72.2328 33.304 71.9848 33.288 71.7128 33.288H71.4488V30.24C71.7688 30 72.1208 29.832 72.5048 29.736C72.9048 29.64 73.3688 29.592 73.8968 29.592C74.5368 29.592 75.0808 29.696 75.5288 29.904C75.9928 30.112 76.3688 30.448 76.6568 30.912C77.2168 31.84 77.4968 33.48 77.4968 35.832C77.4968 38.168 77.2168 39.816 76.6568 40.776C76.0968 41.704 75.1768 42.168 73.8968 42.168ZM66.0008 29.76H70.4408V46.776H66.0008V29.76ZM79.8758 24.168H84.3158V42H79.8758V24.168ZM90.5277 41.928C89.0877 41.928 88.1197 41.488 87.6237 40.608C87.3997 40.224 87.2477 39.76 87.1677 39.216C87.0877 38.656 87.0477 37.976 87.0477 37.176V29.76H91.4877V35.304C91.4877 36.152 91.4957 36.712 91.5117 36.984C91.5437 37.4 91.5917 37.688 91.6557 37.848C91.7197 38.024 91.8237 38.136 91.9677 38.184C92.1117 38.216 92.3677 38.232 92.7357 38.232H92.9757V41.208C92.3357 41.688 91.5197 41.928 90.5277 41.928ZM92.1837 46.944C91.3517 46.944 90.3757 46.896 89.2557 46.8L87.8637 46.656V43.56H91.0797C91.6557 43.56 92.2157 43.544 92.7597 43.512C93.1437 43.48 93.4237 43.4 93.5997 43.272C93.7917 43.16 93.9037 42.96 93.9357 42.672C93.9677 42.288 93.9837 41.88 93.9837 41.448V29.76H98.4237V40.656C98.4237 41.936 98.3677 42.928 98.2557 43.632C98.1597 44.336 97.9277 44.92 97.5597 45.384C97.1437 45.912 96.5117 46.304 95.6637 46.56C94.8157 46.816 93.6557 46.944 92.1837 46.944Z"
              fill="#05F8F8"
            />
            <path
              d="M33.712 64.352V82.832L28.36 83.168V71.6L25.504 72.896L24.136 68.96L33.712 64.352ZM42.7876 65.216C44.6756 65.216 46.1956 65.824 47.3476 67.04C48.5636 68.336 49.1716 70.16 49.1716 72.512L49.2196 74.216C49.2196 77.32 48.6596 79.624 47.5396 81.128C46.4356 82.616 44.8516 83.36 42.7876 83.36C40.6276 83.36 38.9796 82.44 37.8436 80.6C36.8356 78.968 36.3316 76.856 36.3316 74.264C36.3316 71.208 36.9076 68.912 38.0596 67.376C39.1476 65.936 40.7236 65.216 42.7876 65.216ZM41.6116 76.568C41.6436 76.808 41.6916 77.048 41.7556 77.288C41.8196 77.528 41.8836 77.728 41.9476 77.888C42.1236 78.224 42.3956 78.392 42.7636 78.392C42.9236 78.392 43.0836 78.344 43.2436 78.248C43.4036 78.136 43.5396 77.96 43.6516 77.72C43.7636 77.48 43.8516 77.096 43.9156 76.568L44.0356 75.464L44.0596 74.264L44.0356 73.088L43.9156 71.984C43.8516 71.488 43.7636 71.112 43.6516 70.856C43.5556 70.6 43.4196 70.424 43.2436 70.328C43.0836 70.216 42.9236 70.16 42.7636 70.16C42.3956 70.16 42.1316 70.32 41.9716 70.64C41.8116 70.96 41.6916 71.408 41.6116 71.984L41.4916 73.088C41.4596 73.232 41.4436 73.384 41.4436 73.544C41.4436 73.704 41.4436 73.832 41.4436 73.928V74.264C41.4436 74.488 41.4436 74.696 41.4436 74.888C41.4436 75.064 41.4596 75.256 41.4916 75.464L41.6116 76.568ZM56.6391 65.216C58.5271 65.216 60.0471 65.824 61.1991 67.04C62.4151 68.336 63.0231 70.16 63.0231 72.512L63.0711 74.216C63.0711 77.32 62.5111 79.624 61.3911 81.128C60.2871 82.616 58.7031 83.36 56.6391 83.36C54.4791 83.36 52.8311 82.44 51.6951 80.6C50.6871 78.968 50.1831 76.856 50.1831 74.264C50.1831 71.208 50.7591 68.912 51.9111 67.376C52.9991 65.936 54.5751 65.216 56.6391 65.216ZM55.4631 76.568C55.4951 76.808 55.5431 77.048 55.6071 77.288C55.6711 77.528 55.7351 77.728 55.7991 77.888C55.9751 78.224 56.2471 78.392 56.6151 78.392C56.7751 78.392 56.9351 78.344 57.0951 78.248C57.2551 78.136 57.3911 77.96 57.5031 77.72C57.6151 77.48 57.7031 77.096 57.7671 76.568L57.8871 75.464L57.9111 74.264L57.8871 73.088L57.7671 71.984C57.7031 71.488 57.6151 71.112 57.5031 70.856C57.4071 70.6 57.2711 70.424 57.0951 70.328C56.9351 70.216 56.7751 70.16 56.6151 70.16C56.2471 70.16 55.9831 70.32 55.8231 70.64C55.6631 70.96 55.5431 71.408 55.4631 71.984L55.3431 73.088C55.3111 73.232 55.2951 73.384 55.2951 73.544C55.2951 73.704 55.2951 73.832 55.2951 73.928V74.264C55.2951 74.488 55.2951 74.696 55.2951 74.888C55.2951 75.064 55.3111 75.256 55.3431 75.464L55.4631 76.568ZM65.8347 77.24L70.3227 76.88L67.3707 85.712H63.8427L65.8347 77.24ZM77.5688 65.216C79.4568 65.216 80.9768 65.824 82.1288 67.04C83.3448 68.336 83.9528 70.16 83.9528 72.512L84.0008 74.216C84.0008 77.32 83.4408 79.624 82.3208 81.128C81.2168 82.616 79.6328 83.36 77.5688 83.36C75.4088 83.36 73.7608 82.44 72.6248 80.6C71.6168 78.968 71.1128 76.856 71.1128 74.264C71.1128 71.208 71.6888 68.912 72.8408 67.376C73.9288 65.936 75.5048 65.216 77.5688 65.216ZM76.3928 76.568C76.4248 76.808 76.4728 77.048 76.5368 77.288C76.6008 77.528 76.6648 77.728 76.7288 77.888C76.9048 78.224 77.1768 78.392 77.5448 78.392C77.7048 78.392 77.8648 78.344 78.0248 78.248C78.1848 78.136 78.3208 77.96 78.4328 77.72C78.5448 77.48 78.6328 77.096 78.6968 76.568L78.8168 75.464L78.8408 74.264L78.8168 73.088L78.6968 71.984C78.6328 71.488 78.5448 71.112 78.4328 70.856C78.3368 70.6 78.2008 70.424 78.0248 70.328C77.8648 70.216 77.7048 70.16 77.5448 70.16C77.1768 70.16 76.9128 70.32 76.7528 70.64C76.5928 70.96 76.4728 71.408 76.3928 71.984L76.2728 73.088C76.2408 73.232 76.2248 73.384 76.2248 73.544C76.2248 73.704 76.2248 73.832 76.2248 73.928V74.264C76.2248 74.488 76.2248 74.696 76.2248 74.888C76.2248 75.064 76.2408 75.256 76.2728 75.464L76.3928 76.568ZM91.4204 65.216C93.3084 65.216 94.8284 65.824 95.9804 67.04C97.1964 68.336 97.8044 70.16 97.8044 72.512L97.8524 74.216C97.8524 77.32 97.2924 79.624 96.1724 81.128C95.0684 82.616 93.4844 83.36 91.4204 83.36C89.2604 83.36 87.6124 82.44 86.4764 80.6C85.4684 78.968 84.9644 76.856 84.9644 74.264C84.9644 71.208 85.5404 68.912 86.6924 67.376C87.7804 65.936 89.3564 65.216 91.4204 65.216ZM90.2444 76.568C90.2764 76.808 90.3244 77.048 90.3884 77.288C90.4524 77.528 90.5164 77.728 90.5804 77.888C90.7564 78.224 91.0284 78.392 91.3964 78.392C91.5564 78.392 91.7164 78.344 91.8764 78.248C92.0364 78.136 92.1724 77.96 92.2844 77.72C92.3964 77.48 92.4844 77.096 92.5484 76.568L92.6684 75.464L92.6924 74.264L92.6684 73.088L92.5484 71.984C92.4844 71.488 92.3964 71.112 92.2844 70.856C92.1884 70.6 92.0524 70.424 91.8764 70.328C91.7164 70.216 91.5564 70.16 91.3964 70.16C91.0284 70.16 90.7644 70.32 90.6044 70.64C90.4444 70.96 90.3244 71.408 90.2444 71.984L90.1244 73.088C90.0924 73.232 90.0764 73.384 90.0764 73.544C90.0764 73.704 90.0764 73.832 90.0764 73.928V74.264C90.0764 74.488 90.0764 74.696 90.0764 74.888C90.0764 75.064 90.0924 75.256 90.1244 75.464L90.2444 76.568ZM105.272 65.216C107.16 65.216 108.68 65.824 109.832 67.04C111.048 68.336 111.656 70.16 111.656 72.512L111.704 74.216C111.704 77.32 111.144 79.624 110.024 81.128C108.92 82.616 107.336 83.36 105.272 83.36C103.112 83.36 101.464 82.44 100.328 80.6C99.3199 78.968 98.8159 76.856 98.8159 74.264C98.8159 71.208 99.3919 68.912 100.544 67.376C101.632 65.936 103.208 65.216 105.272 65.216ZM104.096 76.568C104.128 76.808 104.176 77.048 104.24 77.288C104.304 77.528 104.368 77.728 104.432 77.888C104.608 78.224 104.88 78.392 105.248 78.392C105.408 78.392 105.568 78.344 105.728 78.248C105.888 78.136 106.024 77.96 106.136 77.72C106.248 77.48 106.336 77.096 106.4 76.568L106.52 75.464L106.544 74.264L106.52 73.088L106.4 71.984C106.336 71.488 106.248 71.112 106.136 70.856C106.04 70.6 105.904 70.424 105.728 70.328C105.568 70.216 105.408 70.16 105.248 70.16C104.88 70.16 104.616 70.32 104.456 70.64C104.296 70.96 104.176 71.408 104.096 71.984L103.976 73.088C103.944 73.232 103.928 73.384 103.928 73.544C103.928 73.704 103.928 73.832 103.928 73.928V74.264C103.928 74.488 103.928 74.696 103.928 74.888C103.928 75.064 103.944 75.256 103.976 75.464L104.096 76.568ZM114.468 77.24L118.956 76.88L116.004 85.712H112.476L114.468 77.24ZM126.202 65.216C128.09 65.216 129.61 65.824 130.762 67.04C131.978 68.336 132.586 70.16 132.586 72.512L132.634 74.216C132.634 77.32 132.074 79.624 130.954 81.128C129.85 82.616 128.266 83.36 126.202 83.36C124.042 83.36 122.394 82.44 121.258 80.6C120.25 78.968 119.746 76.856 119.746 74.264C119.746 71.208 120.322 68.912 121.474 67.376C122.562 65.936 124.138 65.216 126.202 65.216ZM125.026 76.568C125.058 76.808 125.106 77.048 125.17 77.288C125.234 77.528 125.298 77.728 125.362 77.888C125.538 78.224 125.81 78.392 126.178 78.392C126.338 78.392 126.498 78.344 126.658 78.248C126.818 78.136 126.954 77.96 127.066 77.72C127.178 77.48 127.266 77.096 127.33 76.568L127.45 75.464L127.474 74.264L127.45 73.088L127.33 71.984C127.266 71.488 127.178 71.112 127.066 70.856C126.97 70.6 126.834 70.424 126.658 70.328C126.498 70.216 126.338 70.16 126.178 70.16C125.81 70.16 125.546 70.32 125.386 70.64C125.226 70.96 125.106 71.408 125.026 71.984L124.906 73.088C124.874 73.232 124.858 73.384 124.858 73.544C124.858 73.704 124.858 73.832 124.858 73.928V74.264C124.858 74.488 124.858 74.696 124.858 74.888C124.858 75.064 124.874 75.256 124.906 75.464L125.026 76.568ZM140.053 65.216C141.941 65.216 143.461 65.824 144.613 67.04C145.829 68.336 146.437 70.16 146.437 72.512L146.485 74.216C146.485 77.32 145.925 79.624 144.805 81.128C143.701 82.616 142.117 83.36 140.053 83.36C137.893 83.36 136.245 82.44 135.109 80.6C134.101 78.968 133.597 76.856 133.597 74.264C133.597 71.208 134.173 68.912 135.325 67.376C136.413 65.936 137.989 65.216 140.053 65.216ZM138.877 76.568C138.909 76.808 138.957 77.048 139.021 77.288C139.085 77.528 139.149 77.728 139.213 77.888C139.389 78.224 139.661 78.392 140.029 78.392C140.189 78.392 140.349 78.344 140.509 78.248C140.669 78.136 140.805 77.96 140.917 77.72C141.029 77.48 141.117 77.096 141.181 76.568L141.301 75.464L141.325 74.264L141.301 73.088L141.181 71.984C141.117 71.488 141.029 71.112 140.917 70.856C140.821 70.6 140.685 70.424 140.509 70.328C140.349 70.216 140.189 70.16 140.029 70.16C139.661 70.16 139.397 70.32 139.237 70.64C139.077 70.96 138.957 71.408 138.877 71.984L138.757 73.088C138.725 73.232 138.709 73.384 138.709 73.544C138.709 73.704 138.709 73.832 138.709 73.928V74.264C138.709 74.488 138.709 74.696 138.709 74.888C138.709 75.064 138.725 75.256 138.757 75.464L138.877 76.568ZM153.905 65.216C155.793 65.216 157.313 65.824 158.465 67.04C159.681 68.336 160.289 70.16 160.289 72.512L160.337 74.216C160.337 77.32 159.777 79.624 158.657 81.128C157.553 82.616 155.969 83.36 153.905 83.36C151.745 83.36 150.097 82.44 148.961 80.6C147.953 78.968 147.449 76.856 147.449 74.264C147.449 71.208 148.025 68.912 149.177 67.376C150.265 65.936 151.841 65.216 153.905 65.216ZM152.729 76.568C152.761 76.808 152.809 77.048 152.873 77.288C152.937 77.528 153.001 77.728 153.065 77.888C153.241 78.224 153.513 78.392 153.881 78.392C154.041 78.392 154.201 78.344 154.361 78.248C154.521 78.136 154.657 77.96 154.769 77.72C154.881 77.48 154.969 77.096 155.033 76.568L155.153 75.464L155.177 74.264L155.153 73.088L155.033 71.984C154.969 71.488 154.881 71.112 154.769 70.856C154.673 70.6 154.537 70.424 154.361 70.328C154.201 70.216 154.041 70.16 153.881 70.16C153.513 70.16 153.249 70.32 153.089 70.64C152.929 70.96 152.809 71.408 152.729 71.984L152.609 73.088C152.577 73.232 152.561 73.384 152.561 73.544C152.561 73.704 152.561 73.832 152.561 73.928V74.264C152.561 74.488 152.561 74.696 152.561 74.888C152.561 75.064 152.577 75.256 152.609 75.464L152.729 76.568Z"
              fill="#05F8F8"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.1802 0H8C3.58172 0 0 3.58172 0 8V102C0 106.418 3.58172 110 8 110H36.1802V108H8C4.68629 108 2 105.314 2 102V8C2 4.68629 4.68629 2 8 2H36.1802V0ZM217.82 108H246C249.314 108 252 105.314 252 102V8C252 4.68629 249.314 2 246 2H217.82V0H246C250.418 0 254 3.58172 254 8V102C254 106.418 250.418 110 246 110H217.82V108Z"
              fill="#05F8F8"
            />
          </svg>

          <svg
            width="auto"
            height="110"
            viewBox="0 0 254 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.56 26.208V25.488H27.976L34.888 40.176L34.096 42H30.976L23.56 26.208ZM37.12 35.064H37.024L35.416 38.952L33.352 34.536L37.12 25.488H41.68V42H37.12V35.064ZM23.56 28.584L27.976 37.992V42H23.56V28.584ZM50.8664 34.416C50.8664 34 50.8504 33.704 50.8184 33.528C50.7864 33.352 50.6904 33.224 50.5304 33.144C50.3864 33.064 50.1144 33.008 49.7144 32.976C49.4744 32.96 48.9544 32.952 48.1544 32.952C47.3864 32.952 46.6744 32.984 46.0184 33.048L44.7464 33.12V30C46.2504 29.712 47.8744 29.568 49.6184 29.568C50.9624 29.568 52.0104 29.664 52.7624 29.856C53.5304 30.048 54.1064 30.352 54.4904 30.768C54.8264 31.152 55.0424 31.64 55.1384 32.232C55.2504 32.824 55.3064 33.648 55.3064 34.704V42H50.8664V34.416ZM47.3144 42.168C46.2104 42.168 45.3944 41.864 44.8664 41.256C44.3384 40.632 44.0744 39.696 44.0744 38.448C44.0744 37.68 44.1304 37.064 44.2424 36.6C44.3544 36.12 44.5464 35.744 44.8184 35.472C45.0904 35.184 45.4664 34.984 45.9464 34.872C46.4264 34.744 47.0584 34.68 47.8424 34.68L49.8584 34.728V36.864H49.6184C49.2504 36.864 49.0104 36.872 48.8984 36.888C48.5784 36.904 48.4104 37.056 48.3944 37.344C48.3784 37.44 48.3704 37.64 48.3704 37.944C48.3704 38.184 48.3784 38.368 48.3944 38.496C48.4264 38.624 48.4744 38.728 48.5384 38.808C48.6184 38.92 48.7384 38.984 48.8984 39C49.1224 39.032 49.3624 39.048 49.6184 39.048H49.8584V41.496C49.5064 41.768 49.1304 41.944 48.7304 42.024C48.3464 42.12 47.8744 42.168 47.3144 42.168ZM56.9292 29.76H61.7772L70.0332 42H65.1852L56.9292 29.76ZM64.2972 31.68L65.3052 29.76H69.8652L66.5772 35.064L64.2972 31.68ZM60.2172 36.456L62.4972 39.84L61.3452 42H56.7852L60.2172 36.456ZM76.6613 25.488H90.1733V29.328H76.6613V25.488ZM81.0053 30.288H85.8053V42H81.0053V30.288ZM90.6066 25.488H96.0546L106.543 42H101.071L90.6066 25.488ZM99.3906 28.848L101.215 25.488H106.471L101.911 32.832L99.3906 28.848ZM95.1186 34.512L97.6146 38.472L95.7666 42H90.5106L95.1186 34.512ZM108.216 26.16V25.488H113.016L122.28 41.304V42H117.504L108.216 26.16ZM117.72 31.512V25.488H122.28V39.312L117.72 31.512ZM108.216 28.152L112.776 35.952V42H108.216V28.152Z"
              fill="#05F8F8"
            />
            <path
              d="M23.464 67.896C25.496 67.448 27.592 67.248 29.752 67.296V71.04C29.448 70.992 28.816 70.968 27.856 70.968C27.072 70.968 26.104 71.032 24.952 71.16L23.464 71.352V67.896ZM23.128 81.576C23.128 80.536 23.16 79.696 23.224 79.056C23.288 78.416 23.424 77.864 23.632 77.4C23.856 76.904 24.168 76.48 24.568 76.128C24.984 75.76 25.544 75.432 26.248 75.144L29.056 74.016C29.408 73.872 29.712 73.744 29.968 73.632C30.224 73.504 30.4 73.384 30.496 73.272C30.608 73.16 30.68 73.032 30.712 72.888C30.744 72.728 30.76 72.504 30.76 72.216V67.32C31.528 67.368 32.184 67.464 32.728 67.608C33.288 67.736 33.768 67.952 34.168 68.256C35.096 68.976 35.56 70.224 35.56 72C35.56 73.536 35.304 74.68 34.792 75.432C34.312 76.152 33.528 76.712 32.44 77.112L29.032 78.432C28.744 78.544 28.504 78.648 28.312 78.744C28.136 78.84 28.008 78.936 27.928 79.032C27.848 79.128 27.8 79.256 27.784 79.416C27.768 79.576 27.76 79.84 27.76 80.208V84H23.128V81.576ZM28.768 80.256H35.56V84H28.768V80.256ZM42.6222 70.416C42.5902 70.016 42.5502 69.752 42.5022 69.624C42.4382 69.464 42.3422 69.368 42.2142 69.336C42.0862 69.304 41.8702 69.288 41.5662 69.288H41.4222V67.296H41.5662C42.4942 67.296 43.2062 67.376 43.7022 67.536C44.1982 67.68 44.5662 67.928 44.8062 68.28C45.0302 68.6 45.1662 69.024 45.2142 69.552C45.2622 70.064 45.2862 70.856 45.2862 71.928C45.2862 72.888 45.2622 73.608 45.2142 74.088C45.1822 74.568 45.0942 74.968 44.9502 75.288C44.7742 75.656 44.5022 75.936 44.1342 76.128C43.7822 76.32 43.2782 76.44 42.6222 76.488V70.416ZM41.5662 76.536C40.6542 76.536 39.9502 76.464 39.4542 76.32C38.9582 76.16 38.5902 75.896 38.3502 75.528C38.1262 75.208 37.9902 74.792 37.9422 74.28C37.8942 73.768 37.8702 72.984 37.8702 71.928C37.8702 71.016 37.8862 70.312 37.9182 69.816C37.9662 69.304 38.0702 68.88 38.2302 68.544C38.4062 68.176 38.6702 67.896 39.0222 67.704C39.3742 67.512 39.8782 67.392 40.5342 67.344V71.928C40.5342 72.68 40.5422 73.176 40.5582 73.416C40.5582 73.784 40.5902 74.04 40.6542 74.184C40.7022 74.344 40.7902 74.448 40.9182 74.496C41.0622 74.528 41.2782 74.544 41.5662 74.544H41.7342V76.536H41.5662ZM51.5022 67.488H54.3102L43.5342 84H40.7262L51.5022 67.488ZM54.5022 78.072C54.4702 77.672 54.4302 77.408 54.3822 77.28C54.3182 77.12 54.2222 77.024 54.0942 76.992C53.9662 76.96 53.7502 76.944 53.4462 76.944H53.3022V74.952H53.4462C54.3742 74.952 55.0862 75.032 55.5822 75.192C56.0782 75.336 56.4462 75.584 56.6862 75.936C56.9102 76.256 57.0462 76.68 57.0942 77.208C57.1422 77.72 57.1662 78.512 57.1662 79.584C57.1662 80.544 57.1422 81.264 57.0942 81.744C57.0622 82.224 56.9742 82.624 56.8302 82.944C56.6542 83.312 56.3822 83.592 56.0142 83.784C55.6622 83.976 55.1582 84.096 54.5022 84.144V78.072ZM53.4462 84.192C52.5342 84.192 51.8302 84.12 51.3342 83.976C50.8382 83.816 50.4702 83.552 50.2302 83.184C50.0062 82.864 49.8702 82.448 49.8222 81.936C49.7742 81.424 49.7502 80.64 49.7502 79.584C49.7502 78.672 49.7662 77.968 49.7982 77.472C49.8462 76.96 49.9502 76.536 50.1102 76.2C50.2862 75.832 50.5502 75.552 50.9022 75.36C51.2542 75.168 51.7582 75.048 52.4142 75V79.584C52.4142 80.336 52.4222 80.832 52.4382 81.072C52.4382 81.44 52.4702 81.696 52.5342 81.84C52.5822 82 52.6702 82.104 52.7982 82.152C52.9422 82.184 53.1582 82.2 53.4462 82.2H53.6142V84.192H53.4462Z"
              fill="#05F8F8"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.1802 0H8C3.58172 0 0 3.58172 0 8V102C0 106.418 3.58172 110 8 110H36.1802V108H8C4.68629 108 2 105.314 2 102V8C2 4.68629 4.68629 2 8 2H36.1802V0ZM217.82 108H246C249.314 108 252 105.314 252 102V8C252 4.68629 249.314 2 246 2H217.82V0H246C250.418 0 254 3.58172 254 8V102C254 106.418 250.418 110 246 110H217.82V108Z"
              fill="#05F8F8"
            />
          </svg>
          <svg
            width="auto"
            height="110"
            viewBox="0 0 254 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.488 23.552H35.152V28.856H31.6V40.832L25.912 41.168V28.76H22.192L23.488 23.552ZM43.7114 32.696V32.552C43.7114 32.392 43.6874 32.256 43.6394 32.144C43.5434 31.984 43.4794 31.864 43.4474 31.784C43.2554 31.48 42.9914 31.24 42.6554 31.064C42.3194 30.888 41.8554 30.8 41.2634 30.8C41.0394 30.8 40.8634 30.808 40.7354 30.824L40.1354 30.872L39.7754 30.92L37.9754 31.208L37.3994 31.352L38.2634 27.92L39.3674 27.728C40.5514 27.52 41.6474 27.416 42.6554 27.416C44.8634 27.416 46.5274 27.888 47.6474 28.832C48.7034 29.712 49.2314 30.976 49.2314 32.624V33.392V41H44.3834V39.32L44.0714 39.656C43.0154 40.696 41.8794 41.216 40.6634 41.216C40.4554 41.216 40.2874 41.208 40.1594 41.192C40.0314 41.176 39.8474 41.144 39.6074 41.096C37.6394 40.632 36.4794 39.48 36.1274 37.64C36.0794 37.432 36.0474 37.24 36.0314 37.064C36.0154 36.872 36.0074 36.656 36.0074 36.416C36.0074 34.768 36.7114 33.552 38.1194 32.768C38.7594 32.4 39.4634 32.216 40.2314 32.216C41.1914 32.216 42.1834 32.528 43.2074 33.152L43.7114 33.464V32.696ZM42.4154 37.928L42.7994 37.88C43.2154 37.816 43.5434 37.624 43.7834 37.304C43.8474 37.208 43.9034 37.104 43.9514 36.992C44.0154 36.864 44.0474 36.712 44.0474 36.536C44.0474 36.28 43.9674 36.04 43.8074 35.816C43.6474 35.576 43.4394 35.416 43.1834 35.336C42.9434 35.24 42.5834 35.192 42.1034 35.192C41.6714 35.256 41.3594 35.432 41.1674 35.72C40.9754 36.008 40.8794 36.28 40.8794 36.536C40.8794 36.792 40.9674 37.048 41.1434 37.304C41.4314 37.72 41.8554 37.928 42.4154 37.928ZM55.3638 27.464L56.8758 31.712L58.3638 27.464L63.4758 28.352L60.6198 34.256L63.4518 40.568L58.1958 41.432L56.8758 36.536L55.5318 41.432L50.2758 40.568L53.1078 34.256L50.2518 28.352L55.3638 27.464Z"
              fill="#05F8F8"
            />
            <path
              d="M26.344 65.552H33.88V75.296H36.04L35.464 79.472H33.88V82.832L29.032 83.168V79.472H21.808L26.344 65.552ZM29.392 68.36L27.136 75.296H29.392V68.36ZM45.5716 62.192L48.6916 62.816L38.5396 86.12L35.4196 85.52L45.5716 62.192ZM52.6174 65.552H60.1534V75.296H62.3134L61.7374 79.472H60.1534V82.832L55.3054 83.168V79.472H48.0814L52.6174 65.552ZM55.6654 68.36L53.4094 75.296H55.6654V68.36Z"
              fill="#05F8F8"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.1802 0H8C3.58172 0 0 3.58172 0 8V102C0 106.418 3.58172 110 8 110H36.1802V108H8C4.68629 108 2 105.314 2 102V8C2 4.68629 4.68629 2 8 2H36.1802V0ZM217.82 108H246C249.314 108 252 105.314 252 102V8C252 4.68629 249.314 2 246 2H217.82V0H246C250.418 0 254 3.58172 254 8V102C254 106.418 250.418 110 246 110H217.82V108Z"
              fill="#05F8F8"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Mics;

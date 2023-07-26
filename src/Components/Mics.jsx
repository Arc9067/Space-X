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
              d="M22.936 23.72L28.648 23.384V35.984H34.36L33.256 41H22.936V23.72ZM35.5694 28.088L40.7534 27.752V40.784L35.5694 41.168V28.088ZM38.1614 21.464L41.1854 24.416L38.1614 27.368L35.1374 24.416L38.1614 21.464ZM52.4389 28.088L57.2629 27.752V45.2L52.0789 45.536V40.28C51.4389 40.824 50.5109 41.184 49.2949 41.36L48.6469 41.408C47.1429 41.408 45.8629 40.776 44.8069 39.512C43.6869 38.184 43.1269 36.504 43.1269 34.472L43.1989 33.224C43.3749 31.768 43.8309 30.568 44.5669 29.624C45.3029 28.68 46.2469 28.056 47.3989 27.752C47.9589 27.608 48.4709 27.536 48.9349 27.536C49.5269 27.536 50.0869 27.648 50.6149 27.872C51.1589 28.096 51.6709 28.416 52.1509 28.832L52.4389 29.12V28.088ZM52.0309 34.448C52.0309 33.92 51.8949 33.472 51.6229 33.104C51.3509 32.736 50.9909 32.496 50.5429 32.384L50.0869 32.336C49.5109 32.336 49.0389 32.536 48.6709 32.936C48.3189 33.32 48.1429 33.824 48.1429 34.448C48.1429 35.088 48.3269 35.6 48.6949 35.984C49.0629 36.368 49.5269 36.56 50.0869 36.56C50.6469 36.56 51.1109 36.368 51.4789 35.984C51.8469 35.6 52.0309 35.088 52.0309 34.448ZM59.7357 28.088L64.9197 27.752V34.544V35.24L64.9437 35.624C64.9917 36.248 65.3197 36.56 65.9277 36.56L66.3837 36.488C66.6397 36.392 66.8477 36.216 67.0077 35.96C67.0397 35.912 67.0717 35.832 67.1037 35.72C67.1517 35.592 67.1757 35.512 67.1757 35.48V34.928L67.1997 34.136V28.088L72.3837 27.752V40.832L67.5357 41.168V39.584L67.3917 39.824C66.9757 40.336 66.5197 40.696 66.0237 40.904C65.5277 41.112 64.8797 41.216 64.0797 41.216C62.6557 41.216 61.5757 40.736 60.8397 39.776C60.1037 38.816 59.7357 37.336 59.7357 35.336V34.976V28.088ZM74.4053 28.088L79.5893 27.752V40.784L74.4053 41.168V28.088ZM76.9973 21.464L80.0213 24.416L76.9973 27.368L73.9733 24.416L76.9973 21.464ZM90.6989 28.424V23.024L95.8829 22.664V40.832L91.0349 41.168V39.584C90.8909 39.84 90.7309 40.04 90.5549 40.184C90.2029 40.536 89.7789 40.8 89.2829 40.976C88.8029 41.152 88.2909 41.24 87.7469 41.24C86.7069 41.24 85.7469 40.968 84.8669 40.424C83.9069 39.832 83.1789 39.008 82.6829 37.952C82.3309 37.2 82.1069 36.336 82.0109 35.36C82.0109 35.024 82.0429 34.432 82.1069 33.584C82.1869 32.736 82.2829 32.128 82.3949 31.76C82.7949 30.448 83.4749 29.456 84.4349 28.784C85.3949 28.096 86.4829 27.752 87.6989 27.752C88.7549 27.752 89.7549 27.976 90.6989 28.424ZM88.8989 36.44C89.4429 36.44 89.8989 36.248 90.2669 35.864C90.6349 35.48 90.8189 34.968 90.8189 34.328C90.8189 33.704 90.6269 33.2 90.2429 32.816C89.8749 32.416 89.4109 32.216 88.8509 32.216C88.2749 32.216 87.8029 32.416 87.4349 32.816C87.0829 33.2 86.9069 33.704 86.9069 34.328C86.9069 34.856 87.0429 35.312 87.3149 35.696C87.6029 36.064 87.9709 36.296 88.4189 36.392L88.8989 36.44ZM98.3116 28.088L103.496 27.752V40.784L98.3116 41.168V28.088ZM100.904 21.464L103.928 24.416L100.904 27.368L97.8796 24.416L100.904 21.464ZM105.197 28.256H105.797V26.504L110.981 24.416V28.256H113.117L112.421 31.928H110.981V35.048V35.384V35.648C111.045 36 111.213 36.272 111.485 36.464C111.757 36.64 112.189 36.728 112.781 36.728L113.021 36.704L112.181 41.192H112.085L111.749 41.216C111.637 41.216 111.453 41.208 111.197 41.192C110.957 41.176 110.773 41.168 110.645 41.168C108.853 41.008 107.597 40.496 106.877 39.632C106.157 38.768 105.797 37.36 105.797 35.408V35.048V31.928H104.621L105.197 28.256ZM118.449 27.464L119.985 34.832L121.473 27.464L126.369 28.352L120.921 45.8L115.785 44.936L117.681 39.488L113.361 28.352L118.449 27.464Z"
              fill="#05F8F8"
            />
            <path
              d="M24.376 77.552L24.88 77.744L25.12 77.84L26.032 78.2L26.368 78.32C26.608 78.384 26.936 78.456 27.352 78.536C27.768 78.616 28.096 78.656 28.336 78.656C28.56 78.656 28.752 78.632 28.912 78.584C29.088 78.536 29.256 78.472 29.416 78.392C29.912 78.136 30.16 77.784 30.16 77.336C30.16 77 30.032 76.696 29.776 76.424C29.52 76.152 29.184 76.016 28.768 76.016H28.648H28.072L27.832 75.992H26.08V72.296H27.928H28.144C28.304 72.296 28.464 72.28 28.624 72.248C28.8 72.2 28.944 72.152 29.056 72.104C29.184 72.04 29.272 72 29.32 71.984C29.752 71.744 29.968 71.432 29.968 71.048C29.968 70.808 29.896 70.608 29.752 70.448C29.512 70.112 29.032 69.904 28.312 69.824C28.136 69.824 27.928 69.848 27.688 69.896C27.448 69.928 27.112 70.008 26.68 70.136C26.504 70.184 26.312 70.256 26.104 70.352C25.912 70.432 25.632 70.56 25.264 70.736L24.736 71L24.496 71.144L22.36 67.544C23.048 67 23.904 66.512 24.928 66.08L25.84 65.72C26.944 65.336 28.032 65.144 29.104 65.144C30.848 65.144 32.264 65.632 33.352 66.608C34.456 67.568 35.008 68.744 35.008 70.136C35.008 71.768 34.288 72.936 32.848 73.64L32.656 73.736L32.512 73.808L32.896 74C33.776 74.432 34.44 75 34.888 75.704C35.352 76.408 35.584 77.176 35.584 78.008C35.584 79.176 35.12 80.28 34.192 81.32C33.744 81.832 33.168 82.256 32.464 82.592C31.76 82.928 30.912 83.16 29.92 83.288L28.912 83.36C27.664 83.36 26.104 83.032 24.232 82.376C23.688 82.184 23.28 82.032 23.008 81.92C22.912 81.872 22.656 81.744 22.24 81.536L24.376 77.552ZM42.7876 65.216C44.6756 65.216 46.1956 65.824 47.3476 67.04C48.5636 68.336 49.1716 70.16 49.1716 72.512L49.2196 74.216C49.2196 77.32 48.6596 79.624 47.5396 81.128C46.4356 82.616 44.8516 83.36 42.7876 83.36C40.6276 83.36 38.9796 82.44 37.8436 80.6C36.8356 78.968 36.3316 76.856 36.3316 74.264C36.3316 71.208 36.9076 68.912 38.0596 67.376C39.1476 65.936 40.7236 65.216 42.7876 65.216ZM41.6116 76.568C41.6436 76.808 41.6916 77.048 41.7556 77.288C41.8196 77.528 41.8836 77.728 41.9476 77.888C42.1236 78.224 42.3956 78.392 42.7636 78.392C42.9236 78.392 43.0836 78.344 43.2436 78.248C43.4036 78.136 43.5396 77.96 43.6516 77.72C43.7636 77.48 43.8516 77.096 43.9156 76.568L44.0356 75.464L44.0596 74.264L44.0356 73.088L43.9156 71.984C43.8516 71.488 43.7636 71.112 43.6516 70.856C43.5556 70.6 43.4196 70.424 43.2436 70.328C43.0836 70.216 42.9236 70.16 42.7636 70.16C42.3956 70.16 42.1316 70.32 41.9716 70.64C41.8116 70.96 41.6916 71.408 41.6116 71.984L41.4916 73.088C41.4596 73.232 41.4436 73.384 41.4436 73.544C41.4436 73.704 41.4436 73.832 41.4436 73.928V74.264C41.4436 74.488 41.4436 74.696 41.4436 74.888C41.4436 75.064 41.4596 75.256 41.4916 75.464L41.6116 76.568ZM53.1831 77.24L56.2791 80.384L53.1831 83.528L50.0631 80.384L53.1831 77.24ZM58.9932 77.552L59.4972 77.744L59.7372 77.84L60.6492 78.2L60.9852 78.32C61.2252 78.384 61.5532 78.456 61.9692 78.536C62.3852 78.616 62.7132 78.656 62.9532 78.656C63.1772 78.656 63.3692 78.632 63.5292 78.584C63.7052 78.536 63.8732 78.472 64.0332 78.392C64.5292 78.136 64.7772 77.784 64.7772 77.336C64.7772 77 64.6492 76.696 64.3932 76.424C64.1372 76.152 63.8012 76.016 63.3852 76.016H63.2652H62.6892L62.4492 75.992H60.6972V72.296H62.5452H62.7612C62.9212 72.296 63.0812 72.28 63.2412 72.248C63.4172 72.2 63.5612 72.152 63.6732 72.104C63.8012 72.04 63.8892 72 63.9372 71.984C64.3692 71.744 64.5852 71.432 64.5852 71.048C64.5852 70.808 64.5132 70.608 64.3692 70.448C64.1292 70.112 63.6492 69.904 62.9292 69.824C62.7532 69.824 62.5452 69.848 62.3052 69.896C62.0652 69.928 61.7292 70.008 61.2972 70.136C61.1212 70.184 60.9292 70.256 60.7212 70.352C60.5292 70.432 60.2492 70.56 59.8812 70.736L59.3532 71L59.1132 71.144L56.9772 67.544C57.6652 67 58.5212 66.512 59.5452 66.08L60.4572 65.72C61.5612 65.336 62.6492 65.144 63.7212 65.144C65.4652 65.144 66.8812 65.632 67.9692 66.608C69.0732 67.568 69.6252 68.744 69.6252 70.136C69.6252 71.768 68.9052 72.936 67.4652 73.64L67.2732 73.736L67.1292 73.808L67.5132 74C68.3932 74.432 69.0572 75 69.5052 75.704C69.9692 76.408 70.2012 77.176 70.2012 78.008C70.2012 79.176 69.7372 80.28 68.8092 81.32C68.3612 81.832 67.7852 82.256 67.0812 82.592C66.3772 82.928 65.5292 83.16 64.5372 83.288L63.5292 83.36C62.2812 83.36 60.7212 83.032 58.8492 82.376C58.3052 82.184 57.8972 82.032 57.6252 81.92C57.5292 81.872 57.2732 81.744 56.8572 81.536L58.9932 77.552ZM72.4368 67.016C72.8048 66.424 73.2688 65.976 73.8288 65.672C74.4048 65.352 75.0288 65.192 75.7008 65.192C76.1968 65.192 76.6608 65.28 77.0928 65.456C77.5408 65.616 77.9648 65.88 78.3648 66.248C78.8608 66.712 79.2368 67.32 79.4928 68.072C79.7648 68.824 79.9008 69.744 79.9008 70.832C79.9008 71.648 79.8208 72.368 79.6608 72.992C79.5168 73.616 79.2928 74.168 78.9888 74.648C78.6048 75.24 78.1248 75.696 77.5488 76.016C76.9888 76.32 76.3808 76.472 75.7248 76.472C75.2288 76.472 74.7568 76.392 74.3088 76.232C73.8768 76.056 73.4608 75.784 73.0608 75.416C72.5808 74.968 72.2048 74.336 71.9328 73.52C71.6608 72.688 71.5248 71.792 71.5248 70.832C71.5248 69.232 71.8288 67.96 72.4368 67.016ZM85.6608 65.216L87.8208 65.888L78.8928 83.336C78.8768 83.32 78.5088 83.208 77.7888 83C77.5488 82.936 77.1808 82.824 76.6848 82.664L85.6608 65.216ZM85.4208 73.88C85.7888 73.272 86.2528 72.808 86.8128 72.488C87.3888 72.168 88.0048 72.008 88.6608 72.008C89.6528 72.008 90.5408 72.376 91.3248 73.112C91.8208 73.56 92.2048 74.168 92.4768 74.936C92.7488 75.704 92.8848 76.624 92.8848 77.696C92.8848 78.496 92.8048 79.216 92.6448 79.856C92.4848 80.48 92.2608 81.024 91.9728 81.488C91.5888 82.096 91.1168 82.56 90.5568 82.88C89.9968 83.184 89.3808 83.336 88.7088 83.336C87.7008 83.336 86.8128 82.976 86.0448 82.256C85.5648 81.808 85.1888 81.176 84.9168 80.36C84.6448 79.528 84.5088 78.64 84.5088 77.696C84.5088 76.112 84.8128 74.84 85.4208 73.88ZM75.3408 73.208C75.4528 73.272 75.5808 73.304 75.7248 73.304C75.9968 73.304 76.2048 73.192 76.3488 72.968C76.4448 72.808 76.4928 72.72 76.4928 72.704C76.5888 72.448 76.6367 72.096 76.6367 71.648L76.6608 71.432V70.232L76.6367 70.016C76.5728 69.36 76.4768 68.92 76.3488 68.696C76.2208 68.472 76.0128 68.36 75.7248 68.36C75.4208 68.36 75.2048 68.472 75.0768 68.696C74.9488 68.904 74.8448 69.344 74.7648 70.016V70.232V71.432V71.648C74.8288 72.224 74.8928 72.608 74.9568 72.8C75.0208 72.976 75.1488 73.112 75.3408 73.208ZM88.7808 80.192C89.1168 80.192 89.3488 79.944 89.4768 79.448C89.6048 78.936 89.6688 78.352 89.6688 77.696C89.6688 76.96 89.6208 76.424 89.5248 76.088C89.3648 75.528 89.0528 75.248 88.5888 75.248C88.2208 75.248 87.9808 75.496 87.8688 75.992C87.7568 76.488 87.7008 77.088 87.7008 77.792C87.7008 78.496 87.7488 79.016 87.8448 79.352C88.0048 79.912 88.3168 80.192 88.7808 80.192Z"
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
              d="M22.624 23.552H30.4L31.384 23.6C32.92 23.6 34.096 23.912 34.912 24.536C35.68 25.112 36.192 26.008 36.448 27.224C36.48 27.368 36.504 27.576 36.52 27.848C36.536 28.12 36.544 28.264 36.544 28.28C36.544 29.16 36.328 29.912 35.896 30.536C35.4 31.272 34.816 31.752 34.144 31.976L34.36 32.096L34.648 32.264C35.832 32.968 36.568 33.912 36.856 35.096C36.968 35.624 37.024 36.056 37.024 36.392C37.024 37.784 36.48 38.904 35.392 39.752C34.304 40.584 32.768 41 30.784 41H22.624V23.552ZM29.2 37.064C30.48 37.064 31.12 36.4 31.12 35.072C31.088 34.832 31.032 34.648 30.952 34.52C30.664 33.96 30.216 33.68 29.608 33.68L29.248 33.656H28.288V37.064H28.888H29.2ZM30.976 28.832C30.976 28.432 30.856 28.104 30.616 27.848C30.376 27.592 30.048 27.464 29.632 27.464L29.2 27.44H28.384V30.512H29.296C30.416 30.512 30.976 29.952 30.976 28.832ZM38.6888 28.088L43.8728 27.752V34.544V35.24L43.8968 35.624C43.9448 36.248 44.2728 36.56 44.8808 36.56L45.3368 36.488C45.5928 36.392 45.8008 36.216 45.9608 35.96C45.9928 35.912 46.0248 35.832 46.0568 35.72C46.1048 35.592 46.1288 35.512 46.1288 35.48V34.928L46.1528 34.136V28.088L51.3368 27.752V40.832L46.4888 41.168V39.584L46.3448 39.824C45.9288 40.336 45.4728 40.696 44.9768 40.904C44.4808 41.112 43.8328 41.216 43.0328 41.216C41.6088 41.216 40.5288 40.736 39.7928 39.776C39.0568 38.816 38.6888 37.336 38.6888 35.336V34.976V28.088ZM57.5584 27.464L59.0944 34.832L60.5824 27.464L65.4784 28.352L60.0304 45.8L54.8944 44.936L56.7904 39.488L52.4704 28.352L57.5584 27.464Z"
              fill="#05F8F8"
            />
            <path
              d="M24.376 77.552L24.88 77.744L25.12 77.84L26.032 78.2L26.368 78.32C26.608 78.384 26.936 78.456 27.352 78.536C27.768 78.616 28.096 78.656 28.336 78.656C28.56 78.656 28.752 78.632 28.912 78.584C29.088 78.536 29.256 78.472 29.416 78.392C29.912 78.136 30.16 77.784 30.16 77.336C30.16 77 30.032 76.696 29.776 76.424C29.52 76.152 29.184 76.016 28.768 76.016H28.648H28.072L27.832 75.992H26.08V72.296H27.928H28.144C28.304 72.296 28.464 72.28 28.624 72.248C28.8 72.2 28.944 72.152 29.056 72.104C29.184 72.04 29.272 72 29.32 71.984C29.752 71.744 29.968 71.432 29.968 71.048C29.968 70.808 29.896 70.608 29.752 70.448C29.512 70.112 29.032 69.904 28.312 69.824C28.136 69.824 27.928 69.848 27.688 69.896C27.448 69.928 27.112 70.008 26.68 70.136C26.504 70.184 26.312 70.256 26.104 70.352C25.912 70.432 25.632 70.56 25.264 70.736L24.736 71L24.496 71.144L22.36 67.544C23.048 67 23.904 66.512 24.928 66.08L25.84 65.72C26.944 65.336 28.032 65.144 29.104 65.144C30.848 65.144 32.264 65.632 33.352 66.608C34.456 67.568 35.008 68.744 35.008 70.136C35.008 71.768 34.288 72.936 32.848 73.64L32.656 73.736L32.512 73.808L32.896 74C33.776 74.432 34.44 75 34.888 75.704C35.352 76.408 35.584 77.176 35.584 78.008C35.584 79.176 35.12 80.28 34.192 81.32C33.744 81.832 33.168 82.256 32.464 82.592C31.76 82.928 30.912 83.16 29.92 83.288L28.912 83.36C27.664 83.36 26.104 83.032 24.232 82.376C23.688 82.184 23.28 82.032 23.008 81.92C22.912 81.872 22.656 81.744 22.24 81.536L24.376 77.552ZM42.7876 65.216C44.6756 65.216 46.1956 65.824 47.3476 67.04C48.5636 68.336 49.1716 70.16 49.1716 72.512L49.2196 74.216C49.2196 77.32 48.6596 79.624 47.5396 81.128C46.4356 82.616 44.8516 83.36 42.7876 83.36C40.6276 83.36 38.9796 82.44 37.8436 80.6C36.8356 78.968 36.3316 76.856 36.3316 74.264C36.3316 71.208 36.9076 68.912 38.0596 67.376C39.1476 65.936 40.7236 65.216 42.7876 65.216ZM41.6116 76.568C41.6436 76.808 41.6916 77.048 41.7556 77.288C41.8196 77.528 41.8836 77.728 41.9476 77.888C42.1236 78.224 42.3956 78.392 42.7636 78.392C42.9236 78.392 43.0836 78.344 43.2436 78.248C43.4036 78.136 43.5396 77.96 43.6516 77.72C43.7636 77.48 43.8516 77.096 43.9156 76.568L44.0356 75.464L44.0596 74.264L44.0356 73.088L43.9156 71.984C43.8516 71.488 43.7636 71.112 43.6516 70.856C43.5556 70.6 43.4196 70.424 43.2436 70.328C43.0836 70.216 42.9236 70.16 42.7636 70.16C42.3956 70.16 42.1316 70.32 41.9716 70.64C41.8116 70.96 41.6916 71.408 41.6116 71.984L41.4916 73.088C41.4596 73.232 41.4436 73.384 41.4436 73.544C41.4436 73.704 41.4436 73.832 41.4436 73.928V74.264C41.4436 74.488 41.4436 74.696 41.4436 74.888C41.4436 75.064 41.4596 75.256 41.4916 75.464L41.6116 76.568ZM53.1831 77.24L56.2791 80.384L53.1831 83.528L50.0631 80.384L53.1831 77.24ZM58.9932 77.552L59.4972 77.744L59.7372 77.84L60.6492 78.2L60.9852 78.32C61.2252 78.384 61.5532 78.456 61.9692 78.536C62.3852 78.616 62.7132 78.656 62.9532 78.656C63.1772 78.656 63.3692 78.632 63.5292 78.584C63.7052 78.536 63.8732 78.472 64.0332 78.392C64.5292 78.136 64.7772 77.784 64.7772 77.336C64.7772 77 64.6492 76.696 64.3932 76.424C64.1372 76.152 63.8012 76.016 63.3852 76.016H63.2652H62.6892L62.4492 75.992H60.6972V72.296H62.5452H62.7612C62.9212 72.296 63.0812 72.28 63.2412 72.248C63.4172 72.2 63.5612 72.152 63.6732 72.104C63.8012 72.04 63.8892 72 63.9372 71.984C64.3692 71.744 64.5852 71.432 64.5852 71.048C64.5852 70.808 64.5132 70.608 64.3692 70.448C64.1292 70.112 63.6492 69.904 62.9292 69.824C62.7532 69.824 62.5452 69.848 62.3052 69.896C62.0652 69.928 61.7292 70.008 61.2972 70.136C61.1212 70.184 60.9292 70.256 60.7212 70.352C60.5292 70.432 60.2492 70.56 59.8812 70.736L59.3532 71L59.1132 71.144L56.9772 67.544C57.6652 67 58.5212 66.512 59.5452 66.08L60.4572 65.72C61.5612 65.336 62.6492 65.144 63.7212 65.144C65.4652 65.144 66.8812 65.632 67.9692 66.608C69.0732 67.568 69.6252 68.744 69.6252 70.136C69.6252 71.768 68.9052 72.936 67.4652 73.64L67.2732 73.736L67.1292 73.808L67.5132 74C68.3932 74.432 69.0572 75 69.5052 75.704C69.9692 76.408 70.2012 77.176 70.2012 78.008C70.2012 79.176 69.7372 80.28 68.8092 81.32C68.3612 81.832 67.7852 82.256 67.0812 82.592C66.3772 82.928 65.5292 83.16 64.5372 83.288L63.5292 83.36C62.2812 83.36 60.7212 83.032 58.8492 82.376C58.3052 82.184 57.8972 82.032 57.6252 81.92C57.5292 81.872 57.2732 81.744 56.8572 81.536L58.9932 77.552ZM72.4368 67.016C72.8048 66.424 73.2688 65.976 73.8288 65.672C74.4048 65.352 75.0288 65.192 75.7008 65.192C76.1968 65.192 76.6608 65.28 77.0928 65.456C77.5408 65.616 77.9648 65.88 78.3648 66.248C78.8608 66.712 79.2368 67.32 79.4928 68.072C79.7648 68.824 79.9008 69.744 79.9008 70.832C79.9008 71.648 79.8208 72.368 79.6608 72.992C79.5168 73.616 79.2928 74.168 78.9888 74.648C78.6048 75.24 78.1248 75.696 77.5488 76.016C76.9888 76.32 76.3808 76.472 75.7248 76.472C75.2288 76.472 74.7568 76.392 74.3088 76.232C73.8768 76.056 73.4608 75.784 73.0608 75.416C72.5808 74.968 72.2048 74.336 71.9328 73.52C71.6608 72.688 71.5248 71.792 71.5248 70.832C71.5248 69.232 71.8288 67.96 72.4368 67.016ZM85.6608 65.216L87.8208 65.888L78.8928 83.336C78.8768 83.32 78.5088 83.208 77.7888 83C77.5488 82.936 77.1808 82.824 76.6848 82.664L85.6608 65.216ZM85.4208 73.88C85.7888 73.272 86.2528 72.808 86.8128 72.488C87.3888 72.168 88.0048 72.008 88.6608 72.008C89.6528 72.008 90.5408 72.376 91.3248 73.112C91.8208 73.56 92.2048 74.168 92.4768 74.936C92.7488 75.704 92.8848 76.624 92.8848 77.696C92.8848 78.496 92.8048 79.216 92.6448 79.856C92.4848 80.48 92.2608 81.024 91.9728 81.488C91.5888 82.096 91.1168 82.56 90.5568 82.88C89.9968 83.184 89.3808 83.336 88.7088 83.336C87.7008 83.336 86.8128 82.976 86.0448 82.256C85.5648 81.808 85.1888 81.176 84.9168 80.36C84.6448 79.528 84.5088 78.64 84.5088 77.696C84.5088 76.112 84.8128 74.84 85.4208 73.88ZM75.3408 73.208C75.4528 73.272 75.5808 73.304 75.7248 73.304C75.9968 73.304 76.2048 73.192 76.3488 72.968C76.4448 72.808 76.4928 72.72 76.4928 72.704C76.5888 72.448 76.6367 72.096 76.6367 71.648L76.6608 71.432V70.232L76.6367 70.016C76.5728 69.36 76.4768 68.92 76.3488 68.696C76.2208 68.472 76.0128 68.36 75.7248 68.36C75.4208 68.36 75.2048 68.472 75.0768 68.696C74.9488 68.904 74.8448 69.344 74.7648 70.016V70.232V71.432V71.648C74.8288 72.224 74.8928 72.608 74.9568 72.8C75.0208 72.976 75.1488 73.112 75.3408 73.208ZM88.7808 80.192C89.1168 80.192 89.3488 79.944 89.4768 79.448C89.6048 78.936 89.6688 78.352 89.6688 77.696C89.6688 76.96 89.6208 76.424 89.5248 76.088C89.3648 75.528 89.0528 75.248 88.5888 75.248C88.2208 75.248 87.9808 75.496 87.8688 75.992C87.7568 76.488 87.7008 77.088 87.7008 77.792C87.7008 78.496 87.7488 79.016 87.8448 79.352C88.0048 79.912 88.3168 80.192 88.7808 80.192Z"
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
              d="M22.624 23.552H30.4L31.384 23.6C32.92 23.6 34.096 23.912 34.912 24.536C35.68 25.112 36.192 26.008 36.448 27.224C36.48 27.368 36.504 27.576 36.52 27.848C36.536 28.12 36.544 28.264 36.544 28.28C36.544 29.16 36.328 29.912 35.896 30.536C35.4 31.272 34.816 31.752 34.144 31.976L34.36 32.096L34.648 32.264C35.832 32.968 36.568 33.912 36.856 35.096C36.968 35.624 37.024 36.056 37.024 36.392C37.024 37.784 36.48 38.904 35.392 39.752C34.304 40.584 32.768 41 30.784 41H22.624V23.552ZM29.2 37.064C30.48 37.064 31.12 36.4 31.12 35.072C31.088 34.832 31.032 34.648 30.952 34.52C30.664 33.96 30.216 33.68 29.608 33.68L29.248 33.656H28.288V37.064H28.888H29.2ZM30.976 28.832C30.976 28.432 30.856 28.104 30.616 27.848C30.376 27.592 30.048 27.464 29.632 27.464L29.2 27.44H28.384V30.512H29.296C30.416 30.512 30.976 29.952 30.976 28.832ZM38.6888 28.088L43.8728 27.752V34.544V35.24L43.8968 35.624C43.9448 36.248 44.2728 36.56 44.8808 36.56L45.3368 36.488C45.5928 36.392 45.8008 36.216 45.9608 35.96C45.9928 35.912 46.0248 35.832 46.0568 35.72C46.1048 35.592 46.1288 35.512 46.1288 35.48V34.928L46.1528 34.136V28.088L51.3368 27.752V40.832L46.4888 41.168V39.584L46.3448 39.824C45.9288 40.336 45.4728 40.696 44.9768 40.904C44.4808 41.112 43.8328 41.216 43.0328 41.216C41.6088 41.216 40.5288 40.736 39.7928 39.776C39.0568 38.816 38.6888 37.336 38.6888 35.336V34.976V28.088ZM57.5584 27.464L59.0944 34.832L60.5824 27.464L65.4784 28.352L60.0304 45.8L54.8944 44.936L56.7904 39.488L52.4704 28.352L57.5584 27.464Z"
              fill="#05F8F8"
            />
            <path
              d="M24.376 77.552L24.88 77.744L25.12 77.84L26.032 78.2L26.368 78.32C26.608 78.384 26.936 78.456 27.352 78.536C27.768 78.616 28.096 78.656 28.336 78.656C28.56 78.656 28.752 78.632 28.912 78.584C29.088 78.536 29.256 78.472 29.416 78.392C29.912 78.136 30.16 77.784 30.16 77.336C30.16 77 30.032 76.696 29.776 76.424C29.52 76.152 29.184 76.016 28.768 76.016H28.648H28.072L27.832 75.992H26.08V72.296H27.928H28.144C28.304 72.296 28.464 72.28 28.624 72.248C28.8 72.2 28.944 72.152 29.056 72.104C29.184 72.04 29.272 72 29.32 71.984C29.752 71.744 29.968 71.432 29.968 71.048C29.968 70.808 29.896 70.608 29.752 70.448C29.512 70.112 29.032 69.904 28.312 69.824C28.136 69.824 27.928 69.848 27.688 69.896C27.448 69.928 27.112 70.008 26.68 70.136C26.504 70.184 26.312 70.256 26.104 70.352C25.912 70.432 25.632 70.56 25.264 70.736L24.736 71L24.496 71.144L22.36 67.544C23.048 67 23.904 66.512 24.928 66.08L25.84 65.72C26.944 65.336 28.032 65.144 29.104 65.144C30.848 65.144 32.264 65.632 33.352 66.608C34.456 67.568 35.008 68.744 35.008 70.136C35.008 71.768 34.288 72.936 32.848 73.64L32.656 73.736L32.512 73.808L32.896 74C33.776 74.432 34.44 75 34.888 75.704C35.352 76.408 35.584 77.176 35.584 78.008C35.584 79.176 35.12 80.28 34.192 81.32C33.744 81.832 33.168 82.256 32.464 82.592C31.76 82.928 30.912 83.16 29.92 83.288L28.912 83.36C27.664 83.36 26.104 83.032 24.232 82.376C23.688 82.184 23.28 82.032 23.008 81.92C22.912 81.872 22.656 81.744 22.24 81.536L24.376 77.552ZM42.7876 65.216C44.6756 65.216 46.1956 65.824 47.3476 67.04C48.5636 68.336 49.1716 70.16 49.1716 72.512L49.2196 74.216C49.2196 77.32 48.6596 79.624 47.5396 81.128C46.4356 82.616 44.8516 83.36 42.7876 83.36C40.6276 83.36 38.9796 82.44 37.8436 80.6C36.8356 78.968 36.3316 76.856 36.3316 74.264C36.3316 71.208 36.9076 68.912 38.0596 67.376C39.1476 65.936 40.7236 65.216 42.7876 65.216ZM41.6116 76.568C41.6436 76.808 41.6916 77.048 41.7556 77.288C41.8196 77.528 41.8836 77.728 41.9476 77.888C42.1236 78.224 42.3956 78.392 42.7636 78.392C42.9236 78.392 43.0836 78.344 43.2436 78.248C43.4036 78.136 43.5396 77.96 43.6516 77.72C43.7636 77.48 43.8516 77.096 43.9156 76.568L44.0356 75.464L44.0596 74.264L44.0356 73.088L43.9156 71.984C43.8516 71.488 43.7636 71.112 43.6516 70.856C43.5556 70.6 43.4196 70.424 43.2436 70.328C43.0836 70.216 42.9236 70.16 42.7636 70.16C42.3956 70.16 42.1316 70.32 41.9716 70.64C41.8116 70.96 41.6916 71.408 41.6116 71.984L41.4916 73.088C41.4596 73.232 41.4436 73.384 41.4436 73.544C41.4436 73.704 41.4436 73.832 41.4436 73.928V74.264C41.4436 74.488 41.4436 74.696 41.4436 74.888C41.4436 75.064 41.4596 75.256 41.4916 75.464L41.6116 76.568ZM53.1831 77.24L56.2791 80.384L53.1831 83.528L50.0631 80.384L53.1831 77.24ZM58.9932 77.552L59.4972 77.744L59.7372 77.84L60.6492 78.2L60.9852 78.32C61.2252 78.384 61.5532 78.456 61.9692 78.536C62.3852 78.616 62.7132 78.656 62.9532 78.656C63.1772 78.656 63.3692 78.632 63.5292 78.584C63.7052 78.536 63.8732 78.472 64.0332 78.392C64.5292 78.136 64.7772 77.784 64.7772 77.336C64.7772 77 64.6492 76.696 64.3932 76.424C64.1372 76.152 63.8012 76.016 63.3852 76.016H63.2652H62.6892L62.4492 75.992H60.6972V72.296H62.5452H62.7612C62.9212 72.296 63.0812 72.28 63.2412 72.248C63.4172 72.2 63.5612 72.152 63.6732 72.104C63.8012 72.04 63.8892 72 63.9372 71.984C64.3692 71.744 64.5852 71.432 64.5852 71.048C64.5852 70.808 64.5132 70.608 64.3692 70.448C64.1292 70.112 63.6492 69.904 62.9292 69.824C62.7532 69.824 62.5452 69.848 62.3052 69.896C62.0652 69.928 61.7292 70.008 61.2972 70.136C61.1212 70.184 60.9292 70.256 60.7212 70.352C60.5292 70.432 60.2492 70.56 59.8812 70.736L59.3532 71L59.1132 71.144L56.9772 67.544C57.6652 67 58.5212 66.512 59.5452 66.08L60.4572 65.72C61.5612 65.336 62.6492 65.144 63.7212 65.144C65.4652 65.144 66.8812 65.632 67.9692 66.608C69.0732 67.568 69.6252 68.744 69.6252 70.136C69.6252 71.768 68.9052 72.936 67.4652 73.64L67.2732 73.736L67.1292 73.808L67.5132 74C68.3932 74.432 69.0572 75 69.5052 75.704C69.9692 76.408 70.2012 77.176 70.2012 78.008C70.2012 79.176 69.7372 80.28 68.8092 81.32C68.3612 81.832 67.7852 82.256 67.0812 82.592C66.3772 82.928 65.5292 83.16 64.5372 83.288L63.5292 83.36C62.2812 83.36 60.7212 83.032 58.8492 82.376C58.3052 82.184 57.8972 82.032 57.6252 81.92C57.5292 81.872 57.2732 81.744 56.8572 81.536L58.9932 77.552ZM72.4368 67.016C72.8048 66.424 73.2688 65.976 73.8288 65.672C74.4048 65.352 75.0288 65.192 75.7008 65.192C76.1968 65.192 76.6608 65.28 77.0928 65.456C77.5408 65.616 77.9648 65.88 78.3648 66.248C78.8608 66.712 79.2368 67.32 79.4928 68.072C79.7648 68.824 79.9008 69.744 79.9008 70.832C79.9008 71.648 79.8208 72.368 79.6608 72.992C79.5168 73.616 79.2928 74.168 78.9888 74.648C78.6048 75.24 78.1248 75.696 77.5488 76.016C76.9888 76.32 76.3808 76.472 75.7248 76.472C75.2288 76.472 74.7568 76.392 74.3088 76.232C73.8768 76.056 73.4608 75.784 73.0608 75.416C72.5808 74.968 72.2048 74.336 71.9328 73.52C71.6608 72.688 71.5248 71.792 71.5248 70.832C71.5248 69.232 71.8288 67.96 72.4368 67.016ZM85.6608 65.216L87.8208 65.888L78.8928 83.336C78.8768 83.32 78.5088 83.208 77.7888 83C77.5488 82.936 77.1808 82.824 76.6848 82.664L85.6608 65.216ZM85.4208 73.88C85.7888 73.272 86.2528 72.808 86.8128 72.488C87.3888 72.168 88.0048 72.008 88.6608 72.008C89.6528 72.008 90.5408 72.376 91.3248 73.112C91.8208 73.56 92.2048 74.168 92.4768 74.936C92.7488 75.704 92.8848 76.624 92.8848 77.696C92.8848 78.496 92.8048 79.216 92.6448 79.856C92.4848 80.48 92.2608 81.024 91.9728 81.488C91.5888 82.096 91.1168 82.56 90.5568 82.88C89.9968 83.184 89.3808 83.336 88.7088 83.336C87.7008 83.336 86.8128 82.976 86.0448 82.256C85.5648 81.808 85.1888 81.176 84.9168 80.36C84.6448 79.528 84.5088 78.64 84.5088 77.696C84.5088 76.112 84.8128 74.84 85.4208 73.88ZM75.3408 73.208C75.4528 73.272 75.5808 73.304 75.7248 73.304C75.9968 73.304 76.2048 73.192 76.3488 72.968C76.4448 72.808 76.4928 72.72 76.4928 72.704C76.5888 72.448 76.6367 72.096 76.6367 71.648L76.6608 71.432V70.232L76.6367 70.016C76.5728 69.36 76.4768 68.92 76.3488 68.696C76.2208 68.472 76.0128 68.36 75.7248 68.36C75.4208 68.36 75.2048 68.472 75.0768 68.696C74.9488 68.904 74.8448 69.344 74.7648 70.016V70.232V71.432V71.648C74.8288 72.224 74.8928 72.608 74.9568 72.8C75.0208 72.976 75.1488 73.112 75.3408 73.208ZM88.7808 80.192C89.1168 80.192 89.3488 79.944 89.4768 79.448C89.6048 78.936 89.6688 78.352 89.6688 77.696C89.6688 76.96 89.6208 76.424 89.5248 76.088C89.3648 75.528 89.0528 75.248 88.5888 75.248C88.2208 75.248 87.9808 75.496 87.8688 75.992C87.7568 76.488 87.7008 77.088 87.7008 77.792C87.7008 78.496 87.7488 79.016 87.8448 79.352C88.0048 79.912 88.3168 80.192 88.7808 80.192Z"
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
import React from 'react';

const fillColor = "#1F2937";

interface SocialCapProps extends React.SVGProps<SVGSVGElement> {
    isActive: boolean;
}

export const SocialCap: React.FC<SocialCapProps> = ({isActive, ...props}) => (
  <svg width="65" height="59" viewBox="0 0 65 59" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M41.2927 9.39086C43.8859 9.39086 45.9881 7.28865 45.9881 4.69544C45.9881 2.10222 43.8859 0 41.2927 0C38.6995 0 36.5973 2.10222 36.5973 4.69544C36.5973 5.31621 36.7178 5.90883 36.9365 6.45123L33.8735 9.5143C31.8703 7.57047 29.138 6.37381 26.1262 6.37381C19.9814 6.37381 15 11.3552 15 17.5C15 23.6448 19.9814 28.6262 26.1262 28.6262C29.1379 28.6262 31.8701 27.4296 33.8733 25.4858L36.9364 28.5491C36.7176 29.0914 36.5973 29.6839 36.5973 30.3046C36.5973 32.8978 38.6995 35 41.2927 35C43.8859 35 45.9881 32.8978 45.9881 30.3046C45.9881 27.7114 43.8859 25.6091 41.2927 25.6091C40.3865 25.6091 39.5403 25.8659 38.8228 26.3105L35.8523 23.34C35.7995 23.2873 35.7438 23.2394 35.6854 23.1965C36.4444 21.9259 36.957 20.4912 37.1576 18.9583L40.8401 18.9585C41.4536 20.8377 43.2205 22.1954 45.3046 22.1954C47.8978 22.1954 50 20.0932 50 17.5C50 14.9068 47.8978 12.8046 45.3046 12.8046C43.2204 12.8046 41.4534 14.1625 40.8399 16.0418L37.1576 16.0417C36.9571 14.509 36.4444 13.0744 35.6857 11.8038C35.7439 11.7609 35.7995 11.7131 35.8523 11.6604L38.823 8.68963C39.5404 9.13421 40.3867 9.39086 41.2927 9.39086ZM32.295 23.9689C30.6908 25.4991 28.5182 26.4387 26.1262 26.4387C23.7345 26.4387 21.5623 25.4994 19.9581 23.9696C20.2059 22.7761 20.7969 21.6702 21.6719 20.7954C22.8533 19.6139 24.4558 18.9502 26.1266 18.9502C27.7975 18.9502 29.3999 19.6139 30.5814 20.7954C31.4561 21.6701 32.0472 22.7757 32.295 23.9689ZM29.5787 13.9271C29.5787 15.8341 28.0327 17.3801 26.1256 17.3801C24.2185 17.3801 22.6725 15.8341 22.6725 13.9271C22.6725 12.0199 24.2185 10.4739 26.1256 10.4739C28.0327 10.4739 29.5787 12.0199 29.5787 13.9271Z" {...(isActive && {fill: fillColor})} stroke="#707579"/>
    <path d="M4.18311 53.2158C3.51449 53.2158 2.9305 53.1079 2.43115 52.8921C1.93604 52.672 1.54248 52.3716 1.25049 51.9907C0.962728 51.6056 0.795573 51.1655 0.749023 50.6704L0.742676 50.6006H1.88525L1.8916 50.6704C1.92122 50.9751 2.0376 51.2396 2.24072 51.4639C2.44808 51.6839 2.72314 51.8553 3.06592 51.978C3.41292 52.1007 3.80648 52.1621 4.24658 52.1621C4.6613 52.1621 5.02946 52.0965 5.35107 51.9653C5.67692 51.8299 5.93294 51.6437 6.11914 51.4067C6.30534 51.1698 6.39844 50.8968 6.39844 50.5879V50.5815C6.39844 50.2007 6.25879 49.8812 5.97949 49.623C5.7002 49.3607 5.24528 49.1597 4.61475 49.02L3.59912 48.7979C2.68083 48.5947 2.01221 48.2816 1.59326 47.8584C1.17855 47.431 0.971191 46.8851 0.971191 46.2207V46.2144C0.975423 45.7065 1.11296 45.258 1.38379 44.8687C1.65885 44.4793 2.0376 44.1746 2.52002 43.9546C3.00667 43.7345 3.56527 43.6245 4.1958 43.6245C4.80518 43.6245 5.34473 43.7345 5.81445 43.9546C6.28418 44.1704 6.65658 44.4624 6.93164 44.8306C7.21094 45.1987 7.3654 45.6113 7.39502 46.0684L7.40137 46.1572H6.25879L6.24609 46.0747C6.20378 45.8039 6.09375 45.5648 5.91602 45.3574C5.73828 45.1458 5.5013 44.9787 5.20508 44.856C4.90885 44.7332 4.56185 44.674 4.16406 44.6782C3.7832 44.6782 3.44043 44.7375 3.13574 44.856C2.83105 44.9744 2.58773 45.1458 2.40576 45.3701C2.22803 45.5902 2.13916 45.861 2.13916 46.1826V46.189C2.13916 46.5529 2.27458 46.8597 2.54541 47.1094C2.81624 47.359 3.2627 47.5516 3.88477 47.687L4.90039 47.9155C5.85677 48.1271 6.5402 48.4339 6.95068 48.8359C7.36117 49.238 7.56641 49.769 7.56641 50.4292V50.4355C7.56641 51.0068 7.42676 51.4998 7.14746 51.9146C6.86816 52.3293 6.47461 52.6509 5.9668 52.8794C5.45898 53.1037 4.86442 53.2158 4.18311 53.2158ZM12.1431 53.1206C11.4956 53.1206 10.9349 52.9788 10.4609 52.6953C9.99121 52.4076 9.62728 51.9992 9.36914 51.4702C9.11523 50.9412 8.98828 50.3128 8.98828 49.585V49.5723C8.98828 48.8402 9.11523 48.2096 9.36914 47.6807C9.62728 47.1517 9.99121 46.7454 10.4609 46.4619C10.9349 46.1784 11.4956 46.0366 12.1431 46.0366C12.7948 46.0366 13.3555 46.1784 13.8252 46.4619C14.2949 46.7454 14.6567 47.1517 14.9106 47.6807C15.1688 48.2096 15.2979 48.8402 15.2979 49.5723V49.585C15.2979 50.3128 15.1688 50.9412 14.9106 51.4702C14.6567 51.9992 14.2949 52.4076 13.8252 52.6953C13.3555 52.9788 12.7948 53.1206 12.1431 53.1206ZM12.1431 52.1431C12.5747 52.1431 12.9408 52.0415 13.2412 51.8384C13.5417 51.6353 13.7702 51.3433 13.9268 50.9624C14.0876 50.5815 14.168 50.1224 14.168 49.585V49.5723C14.168 49.0306 14.0876 48.5693 13.9268 48.1885C13.7702 47.8076 13.5417 47.5177 13.2412 47.3188C12.9408 47.1157 12.5747 47.0142 12.1431 47.0142C11.7114 47.0142 11.3454 47.1157 11.0449 47.3188C10.7445 47.5177 10.5138 47.8076 10.353 48.1885C10.1965 48.5693 10.1182 49.0306 10.1182 49.5723V49.585C10.1182 50.1224 10.1965 50.5815 10.353 50.9624C10.5138 51.3433 10.7445 51.6353 11.0449 51.8384C11.3454 52.0415 11.7114 52.1431 12.1431 52.1431ZM19.811 53.1206C19.172 53.1206 18.6177 52.9746 18.1479 52.6826C17.6782 52.3906 17.3143 51.978 17.0562 51.4448C16.798 50.9116 16.6689 50.2832 16.6689 49.5596V49.5469C16.6689 48.8359 16.7959 48.2181 17.0498 47.6934C17.3079 47.1686 17.6719 46.7624 18.1416 46.4746C18.6113 46.1826 19.1657 46.0366 19.8047 46.0366C20.359 46.0366 20.8372 46.134 21.2393 46.3286C21.6413 46.5233 21.9629 46.7856 22.2041 47.1157C22.4453 47.4416 22.5998 47.8076 22.6675 48.2139L22.6738 48.252H21.5757L21.5693 48.2329C21.4847 47.8944 21.2922 47.6066 20.9917 47.3696C20.6912 47.1326 20.2956 47.0142 19.8047 47.0142C19.3942 47.0142 19.0387 47.1178 18.7383 47.3252C18.4378 47.5326 18.2051 47.8267 18.04 48.2075C17.8792 48.5841 17.7988 49.0306 17.7988 49.5469V49.5596C17.7988 50.0843 17.8813 50.5413 18.0464 50.9307C18.2114 51.3158 18.4442 51.6141 18.7446 51.8257C19.0451 52.0373 19.3984 52.1431 19.8047 52.1431C20.266 52.1431 20.6426 52.0436 20.9346 51.8447C21.2266 51.6458 21.436 51.356 21.563 50.9751L21.5757 50.937L22.6675 50.9307L22.6548 51.0005C22.5617 51.411 22.3966 51.777 22.1597 52.0986C21.9227 52.416 21.6095 52.6657 21.2202 52.8477C20.8309 53.0296 20.3612 53.1206 19.811 53.1206ZM24.3115 53V46.1572H25.416V53H24.3115ZM24.8701 44.8369C24.6628 44.8369 24.4829 44.7629 24.3306 44.6147C24.1825 44.4624 24.1084 44.2826 24.1084 44.0752C24.1084 43.8636 24.1825 43.6838 24.3306 43.5356C24.4829 43.3875 24.6628 43.3135 24.8701 43.3135C25.0817 43.3135 25.2616 43.3875 25.4097 43.5356C25.5578 43.6838 25.6318 43.8636 25.6318 44.0752C25.6318 44.2826 25.5578 44.4624 25.4097 44.6147C25.2616 44.7629 25.0817 44.8369 24.8701 44.8369ZM29.377 53.1206C28.9453 53.1206 28.556 53.0381 28.209 52.873C27.8662 52.708 27.5933 52.4731 27.3901 52.1685C27.1912 51.8638 27.0918 51.5041 27.0918 51.0894V51.0767C27.0918 50.4673 27.3076 49.9912 27.7393 49.6484C28.1751 49.3014 28.7909 49.1047 29.5864 49.0581L32.1001 48.9058V49.7881L29.7197 49.9404C29.1992 49.9701 28.8184 50.078 28.5771 50.2642C28.3402 50.4504 28.2217 50.7127 28.2217 51.0513V51.064C28.2217 51.411 28.3529 51.6818 28.6152 51.8765C28.8776 52.0669 29.2077 52.1621 29.6055 52.1621C29.9821 52.1621 30.3164 52.0881 30.6084 51.9399C30.9004 51.7876 31.1289 51.5824 31.2939 51.3242C31.4632 51.0661 31.5479 50.7741 31.5479 50.4482V48.3154C31.5479 47.8923 31.4188 47.5706 31.1606 47.3506C30.9067 47.1263 30.5238 47.0142 30.0117 47.0142C29.6012 47.0142 29.2648 47.0882 29.0024 47.2363C28.7401 47.3802 28.5645 47.5854 28.4756 47.8521L28.4692 47.8711H27.3647L27.3711 47.833C27.4303 47.4733 27.5785 47.1602 27.8154 46.8936C28.0566 46.6227 28.3677 46.4132 28.7485 46.2651C29.1294 46.1128 29.5632 46.0366 30.0498 46.0366C30.6084 46.0366 31.0802 46.1276 31.4653 46.3096C31.8547 46.4915 32.1488 46.7539 32.3477 47.0967C32.5508 47.4352 32.6523 47.8415 32.6523 48.3154V53H31.5479V51.9907H31.4463C31.3024 52.2319 31.1268 52.4372 30.9194 52.6064C30.7163 52.7757 30.4857 52.9048 30.2275 52.9937C29.9694 53.0783 29.6859 53.1206 29.377 53.1206ZM34.7344 53V43.4404H35.8389V53H34.7344ZM45.4429 53.2158C44.6134 53.2158 43.8962 53.0212 43.291 52.6318C42.6859 52.2425 42.2183 51.6903 41.8882 50.9751C41.5623 50.2599 41.3994 49.4115 41.3994 48.4297V48.417C41.3994 47.431 41.5623 46.5804 41.8882 45.8652C42.2183 45.1501 42.6838 44.5978 43.2847 44.2085C43.8898 43.8192 44.6071 43.6245 45.4365 43.6245C46.0798 43.6245 46.6637 43.7515 47.1885 44.0054C47.7174 44.255 48.1533 44.6042 48.4961 45.0527C48.8389 45.4971 49.0547 46.0112 49.1436 46.5952L49.1372 46.6079H47.9883L47.9819 46.5952C47.8804 46.2017 47.709 45.8631 47.4678 45.5796C47.2266 45.2918 46.9325 45.0697 46.5854 44.9131C46.2427 44.7565 45.8597 44.6782 45.4365 44.6782C44.8525 44.6782 44.3447 44.8306 43.9131 45.1353C43.4857 45.4399 43.1556 45.8716 42.9229 46.4302C42.6901 46.9888 42.5737 47.651 42.5737 48.417V48.4297C42.5737 49.1914 42.6901 49.8516 42.9229 50.4102C43.1556 50.9688 43.4857 51.4004 43.9131 51.7051C44.3447 52.0098 44.8547 52.1621 45.4429 52.1621C45.8703 52.1621 46.2575 52.0944 46.6045 51.959C46.9515 51.8193 47.2435 51.6226 47.4805 51.3687C47.7174 51.1105 47.8825 50.8058 47.9756 50.4546L47.9883 50.4419H49.1436V50.4546C49.042 51.0132 48.8219 51.4998 48.4834 51.9146C48.1449 52.325 47.7153 52.6445 47.1948 52.873C46.6785 53.1016 46.0946 53.2158 45.4429 53.2158ZM52.7998 53.1206C52.3682 53.1206 51.9788 53.0381 51.6318 52.873C51.2891 52.708 51.0161 52.4731 50.813 52.1685C50.6141 51.8638 50.5146 51.5041 50.5146 51.0894V51.0767C50.5146 50.4673 50.7305 49.9912 51.1621 49.6484C51.598 49.3014 52.2137 49.1047 53.0093 49.0581L55.5229 48.9058V49.7881L53.1426 49.9404C52.6221 49.9701 52.2412 50.078 52 50.2642C51.763 50.4504 51.6445 50.7127 51.6445 51.0513V51.064C51.6445 51.411 51.7757 51.6818 52.0381 51.8765C52.3005 52.0669 52.6305 52.1621 53.0283 52.1621C53.4049 52.1621 53.7393 52.0881 54.0312 51.9399C54.3232 51.7876 54.5518 51.5824 54.7168 51.3242C54.8861 51.0661 54.9707 50.7741 54.9707 50.4482V48.3154C54.9707 47.8923 54.8416 47.5706 54.5835 47.3506C54.3296 47.1263 53.9466 47.0142 53.4346 47.0142C53.0241 47.0142 52.6877 47.0882 52.4253 47.2363C52.1629 47.3802 51.9873 47.5854 51.8984 47.8521L51.8921 47.8711H50.7876L50.7939 47.833C50.8532 47.4733 51.0013 47.1602 51.2383 46.8936C51.4795 46.6227 51.7905 46.4132 52.1714 46.2651C52.5522 46.1128 52.986 46.0366 53.4727 46.0366C54.0312 46.0366 54.5031 46.1276 54.8882 46.3096C55.2775 46.4915 55.5716 46.7539 55.7705 47.0967C55.9736 47.4352 56.0752 47.8415 56.0752 48.3154V53H54.9707V51.9907H54.8691C54.7253 52.2319 54.5496 52.4372 54.3423 52.6064C54.1392 52.7757 53.9085 52.9048 53.6504 52.9937C53.3923 53.0783 53.1087 53.1206 52.7998 53.1206ZM58.0938 55.2852V46.1572H59.1982V47.249H59.2998C59.4395 46.9951 59.6151 46.7793 59.8267 46.6016C60.0382 46.4196 60.2795 46.2799 60.5503 46.1826C60.8211 46.0853 61.1152 46.0366 61.4326 46.0366C62.0124 46.0366 62.516 46.1847 62.9434 46.481C63.375 46.7729 63.7093 47.1834 63.9463 47.7124C64.1833 48.2414 64.3018 48.8613 64.3018 49.5723V49.585C64.3018 50.3001 64.1833 50.9222 63.9463 51.4512C63.7093 51.9801 63.375 52.3906 62.9434 52.6826C62.516 52.9746 62.0124 53.1206 61.4326 53.1206C61.1195 53.1206 60.8232 53.0719 60.5439 52.9746C60.2689 52.873 60.0234 52.7334 59.8076 52.5557C59.596 52.3779 59.4268 52.1663 59.2998 51.9209H59.1982V55.2852H58.0938ZM61.1787 52.1431C61.5977 52.1431 61.9552 52.0415 62.2515 51.8384C62.5477 51.631 62.7741 51.3369 62.9307 50.9561C63.0915 50.571 63.1719 50.1139 63.1719 49.585V49.5723C63.1719 49.0391 63.0915 48.582 62.9307 48.2012C62.7741 47.8203 62.5477 47.5283 62.2515 47.3252C61.9552 47.1178 61.5977 47.0142 61.1787 47.0142C60.764 47.0142 60.4064 47.1178 60.106 47.3252C59.8055 47.5326 59.5749 47.8267 59.4141 48.2075C59.2533 48.5884 59.1729 49.0433 59.1729 49.5723V49.585C59.1729 50.1097 59.2533 50.5646 59.4141 50.9497C59.5749 51.3306 59.8055 51.6247 60.106 51.832C60.4064 52.0394 60.764 52.1431 61.1787 52.1431Z" fill="#1F2937"/>
  </svg>
);

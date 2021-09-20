import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlogPosts from '../components/BlogPosts';



const Home = () =>
{
    return (
        <>
            <div className="callout wrapper">
                <div className="image">
                    <img src="/images/callout.png" alt="" />
                </div>

                <div className="content">
                    <h1>
                        Stand Up For Your
                        <svg viewBox="0 0 473 137" xmlns="http://www.w3.org/2000/svg">
                            <path d="M103.054 5.6089C103.196 7.1828 102.842 8.25591 101.994 8.82823C101.287 9.25748 101.004 10.2591 101.145 11.8329C93.6521 19.4163 86.5122 27.2857 79.7258 35.4414C73.0808 43.597 66.7892 52.1819 60.8511 61.1961C70.7479 58.9068 80.2206 56.7605 89.2692 54.7574C98.4592 52.7542 108.497 51.1804 119.384 50.0357C120.091 50.0357 120.444 49.7495 120.444 49.1772C120.586 48.6049 121.081 48.4618 121.929 48.748C125.322 44.8848 128.574 40.95 131.684 36.9437C134.936 32.7944 138.188 28.7166 141.44 24.7103C144.833 20.704 148.226 16.8408 151.619 13.1207C155.154 9.25749 158.901 5.68045 162.859 2.38957C163.708 2.53265 164.344 2.53265 164.768 2.38957C165.334 2.24649 165.828 2.10341 166.253 1.96032C166.818 1.67416 167.384 1.45954 167.949 1.31646C168.515 1.17338 169.222 1.17338 170.07 1.31646C170.636 1.7457 171.13 2.17495 171.555 2.60419C172.12 3.03344 172.686 3.39114 173.251 3.6773V7.5405C167.737 13.9792 162.082 20.3463 156.285 26.6419C150.488 32.7944 145.116 39.3761 140.167 46.3871C142.005 46.6733 143.843 46.6733 145.681 46.3871C147.519 46.101 149.357 45.8863 151.195 45.7433C153.033 45.4571 154.801 45.3856 156.497 45.5286C158.335 45.5286 160.032 46.0294 161.587 47.031C160.456 49.4634 158.759 51.3234 156.497 52.6112C154.235 53.8989 151.619 54.9005 148.65 55.6159C145.823 56.3313 142.783 56.9036 139.531 57.3329C136.421 57.7621 133.381 58.2629 130.412 58.8352C124.191 65.8462 118.111 72.9287 112.173 80.0828C106.235 87.2369 100.085 94.3194 93.7228 101.33C92.0262 101.33 90.683 101.76 89.6934 102.618C88.7037 103.334 87.6433 103.119 86.5122 101.974C86.5122 101.402 86.3002 100.973 85.876 100.687C89.1278 93.8186 93.1573 87.4515 97.9643 81.5852C102.771 75.5757 107.508 69.4232 112.173 63.1277C101.004 64.2723 90.0468 66.2039 79.3017 68.9225C68.5565 71.641 57.7406 74.4311 46.8541 77.2927C43.6023 81.4421 40.2798 85.5199 36.8865 89.5262C33.4933 93.3894 30.1001 97.3957 26.7069 101.545C23.4551 105.694 20.3447 109.987 17.3756 114.422C14.4065 118.858 11.7909 123.58 9.5288 128.587C9.5288 132.451 8.53911 134.955 6.55974 136.099C5.85282 136.099 5.28728 135.885 4.86313 135.455C4.43898 135.169 3.73206 135.169 2.74238 135.455C1.32854 131.592 0.55093 127.443 0.409546 123.007C1.96477 119.144 3.80276 115.495 5.92351 112.062C7.90288 108.628 10.0943 105.337 12.4979 102.189C14.76 99.0411 17.0928 95.9649 19.4963 92.9601C22.0413 89.9554 24.4448 86.8076 26.7069 83.5168C24.7275 83.946 22.6775 84.3753 20.5567 84.8045C18.436 85.2337 16.5273 85.3768 14.8307 85.2337C13.2755 84.9476 12.0737 84.1606 11.2254 82.8729C10.2357 81.4421 9.88225 79.1528 10.165 76.005C13.9824 73.2864 18.436 71.4979 23.5258 70.6394C28.6156 69.6379 33.4933 68.5648 38.159 67.4201C47.6317 56.9752 56.6096 46.101 65.0926 34.7975C73.717 23.4941 82.6949 12.5484 92.0262 1.96032C93.0159 1.67416 94.0763 1.388 95.2073 1.10184C96.3384 0.815677 97.3988 0.744133 98.3885 0.887212C99.5195 0.887212 100.439 1.24492 101.145 1.96032C101.994 2.67573 102.63 3.89192 103.054 5.6089Z" />
                            <path d="M236.834 33.939C236.834 34.7975 236.622 35.4414 236.198 35.8706C235.915 36.2999 235.491 36.6576 234.925 36.9437C234.36 37.2299 233.794 37.5161 233.229 37.8022C232.805 38.0884 232.38 38.4461 231.956 38.8753C224.746 39.7338 217.747 40.8069 210.961 42.0947C204.174 43.2393 197.388 44.4555 190.602 45.7433C190.319 46.0294 190.319 46.3156 190.602 46.6017C190.884 46.7448 191.238 47.031 191.662 47.4602C192.086 47.8895 192.44 48.3903 192.722 48.9626C193.005 49.3918 193.076 49.9642 192.934 50.6796C192.652 51.9673 192.086 52.8973 191.238 53.4697C190.389 54.042 189.329 54.4712 188.057 54.7574C186.926 55.0436 185.653 55.2582 184.239 55.4013C182.967 55.5443 181.765 55.8305 180.634 56.2597C178.23 57.6906 175.827 59.0498 173.423 60.3376C171.02 61.6253 168.97 63.3423 167.273 65.4885C170.101 65.0593 173.353 64.2723 177.029 63.1277C180.846 61.983 184.734 60.9814 188.693 60.1229C192.793 59.2645 196.752 58.7637 200.569 58.6206C204.386 58.4775 207.78 59.1214 210.749 60.5522C210.607 61.6968 210.113 62.5553 209.264 63.1277C208.557 63.5569 207.638 63.9146 206.507 64.2008C205.518 64.4869 204.528 64.7731 203.538 65.0593C202.548 65.3454 201.842 65.9177 201.417 66.7762C194.348 67.9209 187.774 69.7094 181.694 72.1418C175.756 74.4311 169.323 76.2912 162.396 77.722C160.275 77.2927 158.861 75.8619 158.154 73.4295C156.316 75.0034 154.619 76.7204 153.064 78.5805C151.509 80.2974 150.166 82.3006 149.035 84.5899C153.842 85.8776 158.932 86.1638 164.304 85.4484C169.818 84.5899 175.403 83.5168 181.058 82.229C186.855 80.9413 192.652 79.6536 198.448 78.3658C204.245 77.0781 209.971 76.5058 215.626 76.6489C215.768 77.9366 215.626 78.9382 215.202 79.6536C214.778 80.2259 214.213 80.7267 213.506 81.1559C212.94 81.5852 212.304 82.0144 211.597 82.4437C211.032 82.7298 210.537 83.2306 210.113 83.946C204.316 84.9476 198.448 86.4499 192.51 88.4531C186.714 90.4562 180.846 92.1732 174.908 93.604C169.111 95.0348 163.315 95.8218 157.518 95.9649C151.862 96.1079 146.348 94.8202 140.976 92.1017C140.269 90.3847 139.491 89.0969 138.643 88.2385C138.36 86.3784 138.36 84.8045 138.643 83.5168C138.926 82.086 139.138 80.5836 139.279 79.0097C143.097 73.7157 147.267 68.7794 151.792 64.2008C156.316 59.6222 161.264 55.4728 166.637 51.7527C165.647 51.3234 164.87 50.6796 164.304 49.8211C163.739 48.9626 163.385 48.0326 163.244 47.031C163.102 45.8863 163.173 44.8132 163.456 43.8117C163.88 42.8101 164.516 41.9516 165.365 41.2362C169.323 40.0915 173.636 38.9469 178.301 37.8022C183.108 36.6576 187.915 35.656 192.722 34.7975C197.671 33.796 202.619 32.9375 207.568 32.2221C212.657 31.3636 217.535 30.7197 222.201 30.2905C223.615 30.1474 225.029 30.0043 226.442 29.8612C227.998 29.7181 229.411 29.7181 230.684 29.8612C232.098 30.0043 233.299 30.4335 234.289 31.149C235.42 31.7213 236.268 32.6513 236.834 33.939Z" />
                            <path d="M280.429 31.7928C279.439 35.7991 278.167 39.5192 276.611 42.9532C275.056 46.244 273.36 49.4634 271.522 52.6112C269.684 55.6159 267.846 58.6921 266.008 61.8399C264.311 64.9877 262.827 68.3501 261.554 71.9272C263.533 72.2133 266.078 72.2133 269.189 71.9272C272.299 71.4979 275.339 71.2833 278.308 71.2833C281.419 71.1402 284.246 71.3548 286.791 71.9272C289.477 72.4995 291.386 73.7872 292.517 75.7904C289.831 76.6489 287.074 77.2927 284.246 77.722C281.56 78.1512 278.732 78.5089 275.763 78.7951C272.935 79.0812 270.037 79.3674 267.068 79.6536C264.24 79.7967 261.342 80.1544 258.373 80.7267C257.666 82.7298 257.383 84.6614 257.525 86.5215C257.666 88.2385 257.383 90.027 256.676 91.887C255.545 92.3163 254.344 92.3878 253.071 92.1017C251.799 91.8155 250.526 91.5293 249.254 91.2432C248.547 90.0985 247.981 88.8823 247.557 87.5946C247.133 86.1638 247.062 84.4468 247.345 82.4437C244.659 82.5867 242.326 83.016 240.347 83.7314C238.509 84.3037 236.176 84.5183 233.348 84.3753C231.51 85.2337 230.096 86.593 229.107 88.4531C228.258 90.3131 227.339 92.1732 226.35 94.0333C225.36 95.8933 224.158 97.4672 222.744 98.755C221.33 100.043 219.139 100.615 216.17 100.472C215.887 100.043 215.675 99.6134 215.534 99.1842C215.251 98.6119 214.897 98.1826 214.473 97.8965C214.473 95.6072 215.039 93.8186 216.17 92.5309C217.16 91.1001 218.008 89.5977 218.715 88.0238C216.877 88.4531 214.544 88.5962 211.716 88.4531C208.747 88.31 206.132 87.8808 203.87 87.1653C201.607 86.4499 200.123 85.3768 199.416 83.946C198.568 82.3721 199.275 80.4405 201.537 78.1512C204.789 78.7235 208.465 78.9382 212.565 78.7951C216.665 78.5089 220.553 78.0797 224.229 77.5073C231.157 70.6394 237.802 63.5569 244.164 56.2597C250.526 48.9626 256.676 41.4508 262.615 33.7244C263.463 33.7244 264.452 33.5098 265.584 33.0806C266.856 32.5082 267.704 32.5082 268.128 33.0806C269.118 30.0758 270.956 28.5019 273.642 28.3589C276.329 28.0727 278.591 29.2173 280.429 31.7928ZM257.737 55.4013C254.909 58.406 252.011 61.4107 249.042 64.4154C246.214 67.277 243.598 70.4248 241.195 73.8588C243.033 74.0018 244.659 74.0018 246.073 73.8588C247.486 73.7157 248.971 73.5011 250.526 73.2149C251.233 69.6379 252.435 66.6332 254.131 64.2008C255.828 61.6253 257.03 58.6921 257.737 55.4013C258.161 55.1151 258.232 54.972 257.949 54.972C257.807 54.8289 257.737 54.972 257.737 55.4013Z" />
                            <path d="M332.323 32.8659C331.192 36.2999 328.93 38.5892 325.536 39.7338C318.608 47.4602 311.539 54.9005 304.329 62.0545C297.26 69.2086 290.473 76.7919 283.969 84.8045C290.473 83.0875 297.047 81.5136 303.693 80.0828C310.338 78.5089 317.407 77.0066 324.9 75.5757C326.031 76.1481 327.304 76.4342 328.717 76.4342C330.273 76.4342 331.757 76.4342 333.171 76.4342C334.726 76.4342 336.14 76.5773 337.413 76.8635C338.826 77.1496 339.957 77.9366 340.806 79.2243C340.806 80.369 340.523 81.2275 339.957 81.7998C339.392 82.229 338.685 82.5867 337.837 82.8729C337.13 83.1591 336.352 83.4452 335.504 83.7314C334.656 84.0176 333.949 84.3753 333.383 84.8045C323.062 85.663 313.165 87.6661 303.693 90.8139C294.22 93.8186 285.03 96.7518 276.123 99.6134C274.285 99.3273 272.942 99.2557 272.093 99.3988C271.386 99.3988 270.255 99.2557 268.7 98.9696C268.559 97.3957 268.205 96.1079 267.64 95.1064C267.074 93.9617 266.579 92.8171 266.155 91.6724C269.69 85.2337 273.719 79.5105 278.243 74.5026C282.909 69.4948 287.858 64.7016 293.089 60.1229C295.068 56.9752 297.26 54.1135 299.663 51.5381C302.208 48.8195 304.753 46.244 307.298 43.8117C309.984 41.2362 312.6 38.7323 315.145 36.2999C317.831 33.7244 320.234 30.9343 322.355 27.9296C328.152 25.6403 331.474 27.2857 332.323 32.8659Z" />
                            <path d="M409.881 33.2952C409.881 33.8675 410.022 34.2967 410.305 34.5829C410.588 34.726 410.871 34.8691 411.154 35.0122C411.578 35.1552 411.931 35.3699 412.214 35.656C412.497 35.9422 412.567 36.443 412.426 37.1584C409.174 38.303 405.286 39.0184 400.762 39.3046C396.238 39.5908 392.349 40.0915 389.098 40.8069C388.108 41.2362 387.401 42.0231 386.977 43.1678C386.694 44.1694 386.411 45.2425 386.129 46.3871C378.353 53.5412 371.354 61.4107 365.133 69.9956C358.912 78.5805 353.257 87.8092 348.167 97.6818C346.753 97.968 345.693 98.6119 344.986 99.6134C344.279 100.615 342.936 100.973 340.957 100.687C340.108 99.3988 339.684 97.5387 339.684 95.1064C339.825 92.674 340.25 90.4562 340.957 88.4531C342.653 85.8776 344.208 83.1591 345.622 80.2974C347.036 77.4358 348.521 74.6457 350.076 71.9272C351.631 69.0655 353.328 66.4185 355.166 63.9861C357.004 61.5538 359.124 59.4075 361.528 57.5475C361.811 55.6874 362.447 54.1851 363.437 53.0404C364.426 51.8958 365.416 50.8227 366.406 49.8211C367.537 48.6764 368.526 47.5318 369.375 46.3871C370.364 45.2425 371.071 43.8117 371.495 42.0947C368.951 42.3808 366.335 42.5955 363.649 42.7385C360.962 42.8816 358.276 43.1678 355.59 43.597C353.045 44.0263 350.5 44.5986 347.955 45.314C345.551 46.0294 343.36 47.031 341.381 48.3187L335.443 47.031C334.736 45.8863 334.17 44.5271 333.746 42.9532C333.322 41.2362 333.463 39.5192 334.17 37.8022C335.725 35.7991 337.705 34.5114 340.108 33.939C342.653 33.2236 345.269 32.7944 347.955 32.6513C350.783 32.5082 353.469 32.3651 356.014 32.2221C358.7 32.079 360.962 31.4351 362.8 30.2905C365.911 31.0059 369.445 31.292 373.404 31.149C377.363 31.0059 381.392 30.9343 385.492 30.9343C389.734 30.7912 393.905 30.8628 398.005 31.149C402.246 31.292 406.205 32.0074 409.881 33.2952Z" />
                            <path d="M401.531 66.7762C404.5 66.4901 408.105 65.9893 412.346 65.2739C416.588 64.4154 420.547 63.6284 424.223 62.913C428.323 57.9052 432.069 52.6827 435.463 47.2456C438.856 41.6654 442.815 36.586 447.339 32.0074C449.46 32.2936 451.086 32.3651 452.217 32.2221C453.348 32.079 454.762 32.2221 456.458 32.6513C456.6 33.796 456.882 34.7975 457.306 35.656C457.872 36.3714 458.013 37.4445 457.731 38.8753C453.772 42.1662 450.52 45.5286 447.975 48.9626C445.572 52.3965 442.885 56.0451 439.916 59.9083C442.603 60.3376 445.501 60.3376 448.611 59.9083C451.722 59.336 454.762 58.7637 457.731 58.1913C460.7 57.619 463.527 57.3329 466.214 57.3329C468.9 57.1898 471.162 57.8336 473 59.2645C472.01 60.6953 470.738 61.8399 469.183 62.6984C467.769 63.5569 466.214 64.2723 464.517 64.8446C462.82 65.2739 460.982 65.7031 459.003 66.1324C457.165 66.5616 455.327 66.9909 453.489 67.4201C449.954 68.1355 446.279 68.994 442.461 69.9956C438.785 70.9971 435.109 71.7841 431.433 72.3564C429.737 73.6441 428.323 75.1465 427.192 76.8635C426.061 78.5805 424.859 80.2974 423.586 82.0144C422.455 83.7314 421.042 85.2337 419.345 86.5215C417.79 87.8092 415.74 88.5962 413.195 88.8823C412.346 86.4499 412.559 84.0891 413.831 81.7998C415.103 79.5105 416.093 77.3643 416.8 75.3611C412.983 75.3611 408.812 76.005 404.288 77.2927C399.905 78.4374 395.734 79.4389 391.775 80.2974C389.513 81.8713 387.746 83.8745 386.473 86.3069C385.201 88.5962 383.716 90.7424 382.02 92.7455C380.889 92.8886 380.04 93.0317 379.475 93.1748C378.909 93.3178 378.132 93.1748 377.142 92.7455C376.718 90.8855 376.647 89.1685 376.93 87.5946C377.213 86.0207 377.637 84.5183 378.202 83.0875C378.626 81.5136 379.051 79.8682 379.475 78.1512C379.757 76.4342 379.757 74.5026 379.475 72.3564C380.182 71.7841 380.959 71.2833 381.808 70.8541C382.514 70.2817 383.575 70.1386 384.989 70.4248C387.251 68.2786 389.584 65.56 391.987 62.2692C394.532 58.9783 397.006 55.6159 399.41 52.1819C401.955 48.6049 404.5 45.2425 407.045 42.0947C409.731 38.8038 412.346 36.0853 414.891 33.939C416.447 32.7944 418.002 32.1505 419.557 32.0074C421.112 31.7213 423.021 31.7213 425.283 32.0074C426.98 33.5813 427.828 34.9406 427.828 36.0853C427.969 37.2299 427.616 38.303 426.768 39.3046C426.061 40.3062 425.071 41.2362 423.799 42.0947C422.526 42.8101 421.395 43.597 420.405 44.4555C418.85 45.8863 417.224 47.6749 415.528 49.8211C413.831 51.8242 412.134 53.8989 410.438 56.0451C408.741 58.1913 407.115 60.266 405.56 62.2692C404.005 64.1292 402.662 65.6316 401.531 66.7762Z" />
                        </svg>
                    </h1>

                    <p>
                        #Bincluded is a movement with a mission to build a community of individuals ready to take control of their health and future.
                    </p>

                    <div className="action">
                        <Link className="join" to="">Join Us</Link>
                        <Link className="learn" to="">Learn More</Link>
                    </div>

                    <img src="/images/uab.png" alt="" />
                    <img src="/images/prosper.png" alt="" />

                </div>
            </div>

            <section>
                <div className="container">
                    <div className="seven columns home">
                        <div className="content">
                            <div className="video">
                                <img src="/images/video_still.png" alt="" />
                                <FontAwesomeIcon icon="caret-right" />
                            </div>
                            <div className="featured">
                                <h1>Featured Posts</h1>
                                <BlogPosts />
                            </div>
                        </div>
                    </div>

                    <div className="three columns home">
                        <div className="side">
                            <div className="asset">
                                <img src="/images/resilience.png" alt="" />
                                <img src="/images/resilience2.png" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className="container homebg">
                    <div className="seven columns home">
                        <div className="content">
                            <h1>Blog</h1>
                            <p>This is our By BI blog where we post about health and wellness, fitness, COVID, clinical trials, and offer our thoughts on the hot health subjects of the day.</p>
                            <div className="slidewrap">
                                <ul className="tags">
                                    <li className="active">View All</li>
                                    <li>News</li>
                                    <li>COVID</li>
                                    <li>Clinical Trials</li>
                                    <li>Acclinate</li>
                                </ul>
                                <div className="container slide-panel">
                                    <div className="ten columns">
                                        <div className="slide">
                                            <div className="image">
                                                <img src="/images/blogpost1.png" alt="" />
                                            </div>
                                            <div className="textwrap">
                                                <div className="text">
                                                    <h2>5 Benefits of Riding a Bicycle</h2>
                                                    <h3>by BI</h3>
                                                    <p>COVID-19 has efficiently thrown a wrench in any plans we had for the past year. Travel plans quickly became nonexistent... </p>
                                                    <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slide">
                                            <div className="image">
                                                <img src="/images/blogpost2.png" alt="" />
                                            </div>
                                            <div className="textwrap">
                                                <div className="text">
                                                    <h2>5 Benefits of Riding a Bicycle</h2>
                                                    <h3>by BI</h3>
                                                    <p>COVID-19 has efficiently thrown a wrench in any plans we had for the past year. Travel plans quickly became nonexistent... </p>
                                                    <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slide">
                                            <div className="image">
                                                <img src="/images/blogpost3.png" alt="" />
                                            </div>
                                            <div className="textwrap">
                                                <div className="text">
                                                    <h2>5 Benefits of Riding a Bicycle</h2>
                                                    <h3>by BI</h3>
                                                    <p>COVID-19 has efficiently thrown a wrench in any plans we had for the past year. Travel plans quickly became nonexistent... </p>
                                                    <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slide">
                                            <div className="image">
                                                <img src="/images/blogpost4.png" alt="" />
                                            </div>
                                            <div className="textwrap">
                                                <div className="text">
                                                    <h2>5 Benefits of Riding a Bicycle</h2>
                                                    <h3>by BI</h3>
                                                    <p>COVID-19 has efficiently thrown a wrench in any plans we had for the past year. Travel plans quickly became nonexistent... </p>
                                                    <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="panel-buttons">
                                        <li><FontAwesomeIcon icon="arrow-left" /></li>
                                        <li><FontAwesomeIcon icon="arrow-right" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="three columns home">
                        <div className="side">
                            <h1>Community Resources</h1>
                            <div className="cardpanel">
                                <div className="cardwrap">
                                    <div className="card">
                                        <img src="/images/bhampromise.png" alt="" />
                                        <h2>Birmingham Promise</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                        <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="cardwrap">
                                    <div className="card">
                                        <img src="/images/bhampromise.png" alt="" />
                                        <h2>Birmingham Promise</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla ultrices dapibus. Vivamus eget tellus id ligula posuere malesuada vitae volutpat purus.</p>
                                        <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                            <h1>FIND A CLINICAL TRIAL</h1>
                            <div className="container slice-panel">
                                <div className="ten columns">
                                    <div className="slice">
                                        <div className="image">
                                            <img src="/images/blogpost1.png" alt="" />
                                        </div>
                                        <div className="textwrap">
                                            <div className="text">
                                                <h4>5 Benefits of Riding a Bicycle</h4>
                                                <p>COVID-19 has efficiently thrown a wrench in any plans we had for the past year...</p>
                                                <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slice">
                                        <div className="image">
                                            <img src="/images/blogpost2.png" alt="" />
                                        </div>
                                        <div className="textwrap">
                                            <div className="text">
                                                <h4>5 Benefits of Riding a Bicycle</h4>
                                                <p>COVID-19 has efficiently thrown a wrench in any plans we had for the past year...</p>
                                                <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slice">
                                        <div className="image">
                                            <img src="/images/blogpost3.png" alt="" />
                                        </div>
                                        <div className="textwrap">
                                            <div className="text">
                                                <h4>5 Benefits of Riding a Bicycle</h4>
                                                <p>COVID-19 has efficiently thrown a wrench in any plans we had for the past year...</p>
                                                <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="slice-buttons">
                                    <li><FontAwesomeIcon icon="arrow-left" /></li>
                                    <li><FontAwesomeIcon icon="arrow-right" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home;
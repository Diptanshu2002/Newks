import React from 'react'
import './abt.css'
import Abtweb from './abtwebsite'
import { Link } from 'react-router-dom'

export default function abt() {
  return (
    <div>
            <svg id='logo' width="1093" height="113" viewBox="0 0 1093 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-outside-1_2_17" maskUnits="userSpaceOnUse" x="0.416016" y="0.335999" width="1093" height="113" fill="black">
                <rect fill="white" x="0.416016" y="0.335999" width="1093" height="113"/>
                <path d="M110.104 6.2V107H99.88V26.36L60.28 94.184H55.24L15.64 26.792V107H5.41602V6.2H14.2L57.976 80.936L101.32 6.2H110.104Z"/>
                <path d="M187.011 107.864C177.027 107.864 167.955 105.656 159.795 101.24C151.731 96.728 145.395 90.584 140.787 82.808C136.275 75.032 134.019 66.296 134.019 56.6C134.019 46.904 136.275 38.168 140.787 30.392C145.395 22.616 151.731 16.52 159.795 12.104C167.955 7.592 177.027 5.336 187.011 5.336C196.995 5.336 205.971 7.544 213.939 11.96C222.003 16.376 228.339 22.52 232.947 30.392C237.555 38.168 239.859 46.904 239.859 56.6C239.859 66.296 237.555 75.08 232.947 82.952C228.339 90.728 222.003 96.824 213.939 101.24C205.971 105.656 196.995 107.864 187.011 107.864ZM187.011 98.36C194.979 98.36 202.179 96.584 208.611 93.032C215.043 89.384 220.083 84.392 223.731 78.056C227.379 71.624 229.203 64.472 229.203 56.6C229.203 48.728 227.379 41.624 223.731 35.288C220.083 28.856 215.043 23.864 208.611 20.312C202.179 16.664 194.979 14.84 187.011 14.84C179.043 14.84 171.795 16.664 165.267 20.312C158.835 23.864 153.747 28.856 150.003 35.288C146.355 41.624 144.531 48.728 144.531 56.6C144.531 64.472 146.355 71.624 150.003 78.056C153.747 84.392 158.835 89.384 165.267 93.032C171.795 96.584 179.043 98.36 187.011 98.36Z"/>
                <path d="M347.984 6.2V107H339.2L274.4 25.208V107H263.744V6.2H272.528L337.472 87.992V6.2H347.984Z"/>
                <path d="M452.165 97.784V107H380.885V6.2H450.005V15.416H391.541V51.272H443.669V60.344H391.541V97.784H452.165Z"/>
                <path d="M510.507 72.152V107H499.995V72.152L459.675 6.2H471.051L505.611 62.792L540.171 6.2H550.827L510.507 72.152Z"/>
                <path d="M709.729 6.2V107H699.505V26.36L659.905 94.184H654.865L615.265 26.792V107H605.041V6.2H613.825L657.601 80.936L700.945 6.2H709.729Z"/>
                <path d="M742.572 6.2H753.228V107H742.572V6.2Z"/>
                <path d="M870.265 6.2V107H861.481L796.681 25.208V107H786.025V6.2H794.809L859.753 87.992V6.2H870.265Z"/>
                <path d="M903.166 6.2H944.206C954.862 6.2 964.27 8.36 972.43 12.68C980.59 16.904 986.926 22.856 991.438 30.536C995.95 38.12 998.206 46.808 998.206 56.6C998.206 66.392 995.95 75.128 991.438 82.808C986.926 90.392 980.59 96.344 972.43 100.664C964.27 104.888 954.862 107 944.206 107H903.166V6.2ZM943.63 97.784C952.462 97.784 960.19 96.056 966.814 92.6C973.438 89.048 978.574 84.2 982.222 78.056C985.87 71.816 987.694 64.664 987.694 56.6C987.694 48.536 985.87 41.432 982.222 35.288C978.574 29.048 973.438 24.2 966.814 20.744C960.19 17.192 952.462 15.416 943.63 15.416H913.822V97.784H943.63Z"/>
                <path d="M1049.93 107.864C1042.44 107.864 1035.24 106.664 1028.33 104.264C1021.51 101.864 1016.23 98.696 1012.49 94.76L1016.66 86.552C1020.31 90.2 1025.16 93.176 1031.21 95.48C1037.25 97.688 1043.49 98.792 1049.93 98.792C1058.95 98.792 1065.72 97.16 1070.23 93.896C1074.74 90.536 1077 86.216 1077 80.936C1077 76.904 1075.75 73.688 1073.25 71.288C1070.85 68.888 1067.88 67.064 1064.33 65.816C1060.77 64.472 1055.83 63.032 1049.49 61.496C1041.91 59.576 1035.86 57.752 1031.35 56.024C1026.84 54.2 1022.95 51.464 1019.69 47.816C1016.52 44.168 1014.93 39.224 1014.93 32.984C1014.93 27.896 1016.28 23.288 1018.97 19.16C1021.65 14.936 1025.78 11.576 1031.35 9.08C1036.92 6.584 1043.83 5.336 1052.09 5.336C1057.85 5.336 1063.46 6.152 1068.93 7.784C1074.5 9.32 1079.3 11.48 1083.33 14.264L1079.73 22.76C1075.51 19.976 1071 17.912 1066.2 16.568C1061.4 15.128 1056.69 14.408 1052.09 14.408C1043.25 14.408 1036.58 16.136 1032.07 19.592C1027.65 22.952 1025.45 27.32 1025.45 32.696C1025.45 36.728 1026.65 39.992 1029.05 42.488C1031.54 44.888 1034.61 46.76 1038.26 48.104C1042.01 49.352 1047 50.744 1053.24 52.28C1060.63 54.104 1066.58 55.928 1071.09 57.752C1075.7 59.48 1079.59 62.168 1082.76 65.816C1085.93 69.368 1087.51 74.216 1087.51 80.36C1087.51 85.448 1086.12 90.104 1083.33 94.328C1080.65 98.456 1076.47 101.768 1070.81 104.264C1065.14 106.664 1058.18 107.864 1049.93 107.864Z"/>
                </mask>
                <path d="M110.104 6.2V107H99.88V26.36L60.28 94.184H55.24L15.64 26.792V107H5.41602V6.2H14.2L57.976 80.936L101.32 6.2H110.104Z" stroke="white" stroke-width="10" mask="url(#path-1-outside-1_2_17)"/>
                <path d="M187.011 107.864C177.027 107.864 167.955 105.656 159.795 101.24C151.731 96.728 145.395 90.584 140.787 82.808C136.275 75.032 134.019 66.296 134.019 56.6C134.019 46.904 136.275 38.168 140.787 30.392C145.395 22.616 151.731 16.52 159.795 12.104C167.955 7.592 177.027 5.336 187.011 5.336C196.995 5.336 205.971 7.544 213.939 11.96C222.003 16.376 228.339 22.52 232.947 30.392C237.555 38.168 239.859 46.904 239.859 56.6C239.859 66.296 237.555 75.08 232.947 82.952C228.339 90.728 222.003 96.824 213.939 101.24C205.971 105.656 196.995 107.864 187.011 107.864ZM187.011 98.36C194.979 98.36 202.179 96.584 208.611 93.032C215.043 89.384 220.083 84.392 223.731 78.056C227.379 71.624 229.203 64.472 229.203 56.6C229.203 48.728 227.379 41.624 223.731 35.288C220.083 28.856 215.043 23.864 208.611 20.312C202.179 16.664 194.979 14.84 187.011 14.84C179.043 14.84 171.795 16.664 165.267 20.312C158.835 23.864 153.747 28.856 150.003 35.288C146.355 41.624 144.531 48.728 144.531 56.6C144.531 64.472 146.355 71.624 150.003 78.056C153.747 84.392 158.835 89.384 165.267 93.032C171.795 96.584 179.043 98.36 187.011 98.36Z" stroke="white" stroke-width="10" mask="url(#path-1-outside-1_2_17)"/>
                <path d="M347.984 6.2V107H339.2L274.4 25.208V107H263.744V6.2H272.528L337.472 87.992V6.2H347.984Z" stroke="white" stroke-width="10" mask="url(#path-1-outside-1_2_17)"/>
                <path d="M452.165 97.784V107H380.885V6.2H450.005V15.416H391.541V51.272H443.669V60.344H391.541V97.784H452.165Z" stroke="white" stroke-width="10" mask="url(#path-1-outside-1_2_17)"/>
                <path d="M510.507 72.152V107H499.995V72.152L459.675 6.2H471.051L505.611 62.792L540.171 6.2H550.827L510.507 72.152Z" stroke="white" stroke-width="10" mask="url(#path-1-outside-1_2_17)"/>
                <path d="M709.729 6.2V107H699.505V26.36L659.905 94.184H654.865L615.265 26.792V107H605.041V6.2H613.825L657.601 80.936L700.945 6.2H709.729Z" stroke="white" stroke-width="10" mask="url(#path-1-outside-1_2_17)"/>
                <path d="M742.572 6.2H753.228V107H742.572V6.2Z" stroke="white" stroke-width="10" mask="url(#path-1-outside-1_2_17)"/>
                <path d="M870.265 6.2V107H861.481L796.681 25.208V107H786.025V6.2H794.809L859.753 87.992V6.2H870.265Z" stroke="white" stroke-width="10" mask="url(#path-1-outside-1_2_17)"/>
                <path d="M903.166 6.2H944.206C954.862 6.2 964.27 8.36 972.43 12.68C980.59 16.904 986.926 22.856 991.438 30.536C995.95 38.12 998.206 46.808 998.206 56.6C998.206 66.392 995.95 75.128 991.438 82.808C986.926 90.392 980.59 96.344 972.43 100.664C964.27 104.888 954.862 107 944.206 107H903.166V6.2ZM943.63 97.784C952.462 97.784 960.19 96.056 966.814 92.6C973.438 89.048 978.574 84.2 982.222 78.056C985.87 71.816 987.694 64.664 987.694 56.6C987.694 48.536 985.87 41.432 982.222 35.288C978.574 29.048 973.438 24.2 966.814 20.744C960.19 17.192 952.462 15.416 943.63 15.416H913.822V97.784H943.63Z" stroke="white" stroke-width="10" mask="url(#path-1-outside-1_2_17)"/>
                <path d="M1049.93 107.864C1042.44 107.864 1035.24 106.664 1028.33 104.264C1021.51 101.864 1016.23 98.696 1012.49 94.76L1016.66 86.552C1020.31 90.2 1025.16 93.176 1031.21 95.48C1037.25 97.688 1043.49 98.792 1049.93 98.792C1058.95 98.792 1065.72 97.16 1070.23 93.896C1074.74 90.536 1077 86.216 1077 80.936C1077 76.904 1075.75 73.688 1073.25 71.288C1070.85 68.888 1067.88 67.064 1064.33 65.816C1060.77 64.472 1055.83 63.032 1049.49 61.496C1041.91 59.576 1035.86 57.752 1031.35 56.024C1026.84 54.2 1022.95 51.464 1019.69 47.816C1016.52 44.168 1014.93 39.224 1014.93 32.984C1014.93 27.896 1016.28 23.288 1018.97 19.16C1021.65 14.936 1025.78 11.576 1031.35 9.08C1036.92 6.584 1043.83 5.336 1052.09 5.336C1057.85 5.336 1063.46 6.152 1068.93 7.784C1074.5 9.32 1079.3 11.48 1083.33 14.264L1079.73 22.76C1075.51 19.976 1071 17.912 1066.2 16.568C1061.4 15.128 1056.69 14.408 1052.09 14.408C1043.25 14.408 1036.58 16.136 1032.07 19.592C1027.65 22.952 1025.45 27.32 1025.45 32.696C1025.45 36.728 1026.65 39.992 1029.05 42.488C1031.54 44.888 1034.61 46.76 1038.26 48.104C1042.01 49.352 1047 50.744 1053.24 52.28C1060.63 54.104 1066.58 55.928 1071.09 57.752C1075.7 59.48 1079.59 62.168 1082.76 65.816C1085.93 69.368 1087.51 74.216 1087.51 80.36C1087.51 85.448 1086.12 90.104 1083.33 94.328C1080.65 98.456 1076.47 101.768 1070.81 104.264C1065.14 106.664 1058.18 107.864 1049.93 107.864Z" stroke="white" stroke-width="10" mask="url(#path-1-outside-1_2_17)"/>
            </svg>
            <h1 className='pres' style={{color: 'white'}}>PRESENTS</h1>
            <h1 className='newksposter' style={{color: 'white', fontSize: '144px', fontFamily: 'georgia'}}>NEWKS</h1>

            <div className='btnsgrp'>
                <button type="button" class="bn1 btn btn-outline-light" ><Link to="/feed" style={{textDecoration: 'none', color: 'white'}}>Get Started</Link></button>
            </div>
            
        <section style={{marginTop: '100vh', width: '100%'}}>
            <Abtweb/>
        </section>


    </div>
  )
}
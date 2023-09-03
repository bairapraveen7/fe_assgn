#!/bin/sh

array=(https://culture.easy.xyz/wp-content/uploads/sites/6/2021/06/culture_easy_white.png https://images.g2crowd.com/uploads/report_medal/image/2427/medal.svg https://images.g2crowd.com/uploads/report_medal/image/2424/medal.svg https://images.g2crowd.com/uploads/report_medal/image/2587/medal.svg https://images.g2crowd.com/uploads/report_medal/image/2579/medal.svg https://www.g2.com/shared-assets/product-badges/users-love-us.svg)

for i in ${array[@]};
do
wget $i
done

exit 0;

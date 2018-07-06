#!/bin/bash -ilex
mvn clean package
#sh docker.sh
#��������
docker build -t="wulinyun/docker-jar-demo" .   
#�鿴���ؾ���
docker images
#���Ϊ˽�вֿ⾵��
docker tag wulinyun/docker-jar-demo harbor.landaudev.com/demo/docker-jar-demo:latest
#���͵�˽�о���ֿ⵱��
docker push harbor.landaudev.com/demo/docker-jar-demo:latest
#��½��
cf login -a https://api.landaudev.com  -u demo -p demo --skip-ssl-validation

#ѡ����֯�ռ�
cf target -o demo -s deployment
#����PCF
cf push docker-jar-demo --docker-image harbor.landaudev.com/demo/docker-jar-demo:latest
#ɾ��tag���
#docker rmi -f harbor.landaudev.com/demo/docker-jar-demo:latest
#��̨���б���docker����
#sudo docker run   -d -p 8080:8080 wulinyun/docker-jar-demo
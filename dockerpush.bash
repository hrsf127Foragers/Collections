#!/bin/bash

docker build -t collection .

docker run -dp 4568:4568 --name collection-container collection

docker commit collection-container collection

docker tag collection tjpuccini/collections:collections-image

docker push tjpuccini/collections:collections-image


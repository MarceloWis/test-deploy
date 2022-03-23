FROM --platform=arm64 kong:2.3.2-alpine 

USER root
RUN luarocks install lua-resty-openidc

USER kong
FROM ubuntu:14.04

RUN apt-get update -qq && apt-get install -y aptitude git imagemagick libpq-dev curl vim bash-completion htop nodejs postgresql-client

RUN gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
RUN \curl -sSL https://get.rvm.io | bash -s stable
RUN /bin/bash -l -c "rvm install 2.2.2"
RUN /bin/bash -l -c "gem install bundler -v 1.12.5 --no-ri --no-rdoc"

ENV APP_ROOT /app

RUN mkdir $APP_ROOT
WORKDIR $APP_ROOT
ADD . $APP_ROOT
RUN /bin/bash -l -c "bundle install"

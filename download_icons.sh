#!/bin/bash

icons=(
  "typescript"
  "javascript"
  "react"
  "nextdotjs"
  "nodedotjs"
  "express"
  "mongodb"
  "postgresql"
  "python"
  "django"
  "docker"
  "git"
  "amazonaws"
  "firebase"
  "graphql"
  "tailwindcss"
  "sass"
  "redux"
  "jest"
  "cypress"
)

for icon in "${icons[@]}"
do
  wget -O "public/icons/${icon}.svg" "https://cdn.simpleicons.org/${icon}"
done
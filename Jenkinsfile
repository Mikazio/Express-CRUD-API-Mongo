pipeline {
  agent any
  stages {
    stage('install dependencies') {
      steps {
        sh 'npm install'
      }
    }
  }
  environment {
    PORT = '80'
    DB_NAME = ' Note'
  }
}
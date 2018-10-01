pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        powershell(script: 'ccc/grf', encoding: 'base64')
      }
    }
  }
  environment {
    test = '1'
  }
}
echo "waiting for service to upgrade "
    while true; do

      case `curl -u ""$RANCHER_ACCESSKEY":"$RANCHER_SECRETKEY"" \
          -X GET \
          -H 'Accept: application/json' \
          -H 'Content-Type: application/json' \
          "http://rancher.flowz.com:8080/v2-beta/projects/1a20750/services/1s1340/" | jq '.state'` in
          "\"upgraded\"" )
              echo "completing service upgrade"
              curl -u ""$RANCHER_ACCESSKEY":"$RANCHER_SECRETKEY"" \
                -X POST \
                -H 'Accept: application/json' \
                -H 'Content-Type: application/json' \
                "http://rancher.flowz.com:8080/v2-beta/projects/1a20750/services/1s1340?action=finishupgrade"
              break ;;
          "\"upgrading\"" )
              echo "still upgrading"
              echo -n "."
              sleep 60
              continue ;;
          *)
              die "unexpected upgrade state" ;;
      esac
    done

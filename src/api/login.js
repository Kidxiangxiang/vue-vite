import service from "@/utils/request"

export const login = (data) => {
  return service({
    url: '/oauth/token',
    headers: {
      isToken: false,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    method: 'post',
    data: data
  })
}
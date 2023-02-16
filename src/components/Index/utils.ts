export const ModifyHitData = (data: any) => {
    let rankingNum = 1;
    return (
        data?.data?.top5Contents?.map((obj) => ({
            ...obj, rankingNum: rankingNum++
        }))
    )
}
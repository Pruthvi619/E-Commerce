import "./index.css";

const NurserySection = () => {
  const nurseryItems = [
    {
      id: 1,
      image:
        "https://s3-alpha-sig.figma.com/img/1708/c339/362237370ea139219155cf9fca2448d3?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qOfBgpd9SdsbpVrN0LI3IT5bMV-rQDcjcD~6xv-PGI3HQ-z1SlJOGY6sCK2eSVMEgLB~JEOWFyA-eZPoULd-HfJCJ9NH06HJyk07nKSk8YqswrM91QFC5sBu09eiJikco~Cz9XH5pryCnorJ4qyY0BbUW2XZMGOpehUePpzpv4rd8NoonGchv0gqyMNmSHdSfUV5pobVkd3wOYhyuHyU~TlTXkXEqeEC0AWUg4TKMy~YYdrPP4dCdMODHxFVfPAB~zzmOWC-7HOmun~xC~uXlIgHJwEUN-j9IJ7YLPpbC6F6hjJHm9gglfaw1KI~uOeW5bcduOxMUxbxtWRPkgYRWg__",
      text: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 2,
      image:
        "https://s3-alpha-sig.figma.com/img/5267/1e62/8375cef653c6b9ae388a7f2dda4ba454?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=poRgM6pbkBqdnWsbKmfeS4UcxZkAhi2YMDifsURB-xTIfZcY-QDKhmleBzmNDh3fkjjWEfCtge~Lcr5s7BgkVPU00EZzrOgDP4AwiJpQZhLvRByGDVoDVufqT0lzgOyN9eUHZhC3wUrnOTQCDUpdFO8J0Af~FYl4246Uu-bgheR2kdA2NqkfxOmQs15LNeEsa177Q6uzc4CeEsxTi7Krr-H2F5RcU1fIufPCkvfJasBqRujHQeLQV-7OsXT9tMvK98cPscZcnrQdbTLa0XL4WQrWlaRMbK6tRpyIB7nuxyRTAUhRzeXbkOfSHHhy-wYWGJCwKeQNfn2WzbWKMJxbQA__",
      text: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 3,
      image:
        "https://s3-alpha-sig.figma.com/img/84ed/e8e9/935a62fb31df9354ded9299559307ae6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EkUcvN372cksGIWPwvW5owktp9ytkBrXYwKGswGcGcKTz1P5vCJ1AwDg6XEfLcuYGcNx3T1xbxpj2h0vVt2Jx~J8CqBxk5HOJ8WQGo9GtH-JwoEbw4G2si9EZQgMu95KzZzjsFsbph4Xeq5w6POOx4eZvkuWwjZmTCujut12EViAzhpxyYT8qSiL~eM0VMPp53TxbY47bk1EYpFVi2f~sc8BuMIJ9pnlkysxhWaYblRHulmELZCJcaUDO1QVDUYR6BdzNpmAmCw9xLufhKnsqamAgmGkfC0XfTfN3mxoWd6fZJKhiubj5FVj70lJp1uSwL4zggWiChoZOHe2doVWEA__",
      text: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 4,
      image:
        "https://s3-alpha-sig.figma.com/img/c120/4e2d/7eca96d5008198d2181b991de6f19034?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A52FjCuUbWlwRRJ5kOMbW3y-66Ka0TLI~iK-4nDzoZjb6qA1ukUSJEt~m8qs64IXzwUwhN6sjYdXNt3MJfz4a2XhqqyikLsjbZfS5Mlmxedhs7rxSrK1BwgurAatuEB33Szqkf0UdNyvZF8iiAT1C1eNJl2wN6mjmARVS8GLQXroxtZQe9gRVvHH1K85O8n6B~qNfbMdm0-83H3gnp4Lr~MjstT6BveBn4Htrcw0XdYY3mlPvdPvjNFE~nDn8NEbbOSZEr9dxVZV5m5mp6qhV-ejNZlw~NBSg0NFw8U-jhgBatLZUVqY5jRXaOdmKgnMrKhH9UHRCqBi5RdRcjNWcA__",
      text: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 5,
      image:
        "https://s3-alpha-sig.figma.com/img/2270/0766/ed50532940537d9d39d2626bb7a95167?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e1u59mBoYOHSu1vnubFHYBlgxelj9I23c0h6FVJu8fe99v6vjeEdd6UOgf5HTHto7xa-16CN1hOLofpqppNDJz2Oxg1tf484NGDPRM6lKLxCAZ94vesYIDXG~EjlY0mXxC0qLyFyzX4~ntpqmYvlbRUFu32C4Pr3e9DHL6To3K2q54-FoFL4hobrTij7oIpGHfxKj4eMB6q2xHjXlvJZkXmQ3Tk7snP0197a8V3CO1XvygFiFYLckqUOzhSQ0JP~4BzrS~rcb84Rbtx8Zc77A4AHVH6ZU-wr9omI~Uc8jTCmEU~A6x~78h0RCTr~cd1EsqQnDTuc-v-d7Cql-7Ytdg__",
      text: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 6,
      image:
        "https://s3-alpha-sig.figma.com/img/18ca/98ef/7f83ab9fd1481e530fd7e03257a1bb07?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=erDGloJ54aO~tQLVnk6mFUTpCOi05se3amA3zWA2-RjxzBPwDveQ3iUcUvf8xVOHFYQvflhm91zj7kaIHbsgrpThtzu5Dh3JRhZwvJHKO7fRGqUa5wEQUpDVhd5y-oueSXpnOZIpI1IbRifjQ8f2tlT9fxk514i7BHacGloffymzskxSIKUkKPz1dvafN-ko30hOsnIRTkG5HRH9JLa28c6MdQ54mOFvYebATztRbkrhsIPRtFu45mq28f4wgVpX5k2z2ZgXFiz7JtNgAZxlsRIL8XcgVlk6X1p7XMmW95DFj2d8bUe1TIZcgsuwDc-yRE0eMX8mGgk2ENqIm~Xvig__",
      text: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 7,
      image:
        "https://s3-alpha-sig.figma.com/img/c0ec/e88d/1218900e6bd6cc6f3d5a104c0dbb8212?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gwOdq7lIphjriAYrtpA-wCNACJZQOVmzwfpVmFho~vrcylQhOmPtsN8OXniTb7xqVeIWxCh1Gf0c0Mc6Fb5QePY02V3GoHGuSQEF2uc9443BVOlD3zNAW6f2hG3Ez0tyMai~eioWsjF9jXgnUfKTppFztwiblMTol2j1X9YojnliUt4fVSyoMQloQFHVgcS-W3YCeTRlQb~eF5U7ftU~WRqSBAw8PTlBk3ZL3AdSgrmM9g9D-zcpbbSzXvKt31sRbspjrTuwizjJjMHvOeOdRbvtDDhiQeo41kXUsVTvzOMX431ItCDie4VTBu3yaPiFpoh0FmLYfyE9tw9bYA4OtQ__",
      text: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
  ];

  return (
    <section className="nursery-section container">
      <h2>Nursery</h2>
      <div className="nursery-grid">
        {nurseryItems.map((item) => (
          <div key={item.id} className="nursery-item">
            <div className="image-container">
              <img src={item.image} alt="Nursery item" />
            </div>
            <p className="description">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NurserySection;

from comments.serializers.populated import PopulatedCommentSerializer
from ..serializers.common import MpSerializer 
from party.serializers.common import partySerializer

class PopulatedMpSerializer(MpSerializer):
    comments = PopulatedCommentSerializer(many=True)
    party = partySerializer(many=True)